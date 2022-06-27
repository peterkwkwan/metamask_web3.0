import React, { useEffect, useState } from 'react';
import { Button, VARIANT } from 'src/components/Button';
import { ButtonIcon } from 'src/components/ButtonIcon';
import { ErrorMessage } from 'src/components/disconnected/ErrorMessage';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

interface Props {
    handleAddressChange: (address: string) => void;
    unsupportedNetwork: boolean;
}

export const Disconnected = ({
    handleAddressChange,
    unsupportedNetwork,
}: Props) => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (unsupportedNetwork)
            setErrorMessage('You are on an unsupported network.');
    }, [unsupportedNetwork]);

    const pendingRequestCode = -32002;
    const errorList = [
        {
            code: pendingRequestCode,
            message:
                'There is already a pending request for unlocking MetaMask. Please connect using your MetaMask extension in your browser.',
        },
    ];

    const getButtonText = () => {
        if (unsupportedNetwork) {
            return 'Reload';
        }
        if (loading) {
            return 'Initializing...';
        }
        return 'Connect to MetaMask';
    };

    const handleClick = async () => {
        setLoading(true);
        try {
            const { ethereum } = window;
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
            });
            handleAddressChange(accounts[0]);
            setLoading(false);
        } catch (error: any) {
            errorList.forEach((item) => {
                if (item.code === error.code) {
                    setErrorMessage(item.message);
                }
            });
            if (error.code === pendingRequestCode) {
                setLoading(true);
            } else {
                setLoading(false);
            }
        }
    };
    return (
        <Container>
            <Button
                onClick={handleClick}
                disabled={loading}
                variant={
                    unsupportedNetwork ? VARIANT.SECONDARY : VARIANT.PRIMARY
                }
            >
                {getButtonText()}
                <ButtonIcon
                    loading={loading}
                    unsupportedNetwork={unsupportedNetwork}
                />
            </Button>
            <ErrorMessage errorMessage={errorMessage} />
        </Container>
    );
};
