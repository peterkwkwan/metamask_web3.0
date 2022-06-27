import React from 'react';
import styled from 'styled-components';
import { Connected } from './Connected';
import { Disconnected } from './Disconnected';

const Container = styled.div`
    margin-top: 60px;
    height: 100%;
    width: 100%;
`;

interface Props {
    connectedMetamask: boolean;
    unsupportedNetwork: boolean;
    handleAddressChange: (address: string) => void;
    accountAddress: string;
}

export const Content = ({
    connectedMetamask,
    unsupportedNetwork,
    handleAddressChange,
    accountAddress,
}: Props) => {
    return (
        <Container>
            {!connectedMetamask ? (
                <Disconnected
                    handleAddressChange={handleAddressChange}
                    unsupportedNetwork={unsupportedNetwork}
                />
            ) : (
                <Connected accountAddress={accountAddress} />
            )}
        </Container>
    );
};
