import React from 'react';
import { ConnectedHeader } from 'src/components/connected/ConnectedHeader';
import { WalletBalance } from 'src/components/connected/WalletBalance';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
`;

interface Props {
    accountAddress: string;
}

export const Connected = ({ accountAddress }: Props) => {
    return (
        <Container>
            <ConnectedHeader accountAddress={accountAddress} />
            <WalletBalance accountAddress={accountAddress} />
        </Container>
    );
};
