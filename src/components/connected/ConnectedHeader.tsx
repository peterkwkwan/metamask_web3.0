import React from 'react';
import styled from 'styled-components';
import { AccountNumber } from './AddressNumber';
import { ConnectedAlert } from './ConnectedAlert';
import { Network } from './Network';

const Container = styled.div`
    position: absolute;
    top: 0;
    border-bottom: 1px solid ${(props) => props.theme.palette.primary.light};
    width: 100%;
`;

const Body = styled.div`
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

interface Props {
    accountAddress: string;
}
export const ConnectedHeader = ({ accountAddress }: Props) => {
    return (
        <Container>
            <Body>
                <ConnectedAlert />
                <AccountNumber accountAddress={accountAddress} />
                <Network />
            </Body>
        </Container>
    );
};
