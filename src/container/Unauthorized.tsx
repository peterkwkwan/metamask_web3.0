import React, { useState } from 'react';
import { Button } from 'src/components/Button';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface Props {
    handleAddressChange: (address: string) => void;
}

export const Unauthorized = ({ handleAddressChange }: Props) => {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        try {
            const { ethereum } = window;
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
            });
            handleAddressChange(accounts[0]);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <Container>
            <Button onClick={handleClick} disabled={loading}>
                Connect to MetaMask
            </Button>
        </Container>
    );
};
