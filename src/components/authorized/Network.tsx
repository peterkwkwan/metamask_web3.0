import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import styled from 'styled-components';
import { chainIdMap } from 'src/constants/chainIdMap';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
`;

const Label = styled.span`
    color: ${(props) => props.theme.palette.text.light};
`;

const NetworkId = styled.span`
    padding-bottom: 12px;
    margin: 0;
    font-weight: 600;
    font-size: 18px;
    color: ${(props) => props.theme.palette.text.main};
`;

const NetworkName = styled.span`
    margin: 0;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 22px;
    color: ${(props) => props.theme.palette.text.main};
`;
export const Network = () => {
    const [networkId, setNetworkId] = useState<undefined | number>(undefined);
    const [networkName, setNetworkName] = useState<undefined | string>(
        undefined,
    );

    useEffect(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const getNetwork = async () => {
            try {
                const { name, chainId } = await provider.getNetwork();
                if (!chainIdMap.get(chainId.toString())) return;

                setNetworkName(name);
                setNetworkId(chainId);
            } catch (error) {
                console.error(error);
            }
        };
        getNetwork();
    }, []);

    return (
        <Container>
            <Label>
                Network:
                <NetworkName> {networkName}</NetworkName>
            </Label>
            <Label>
                Network Id:
                <NetworkId> {networkId}</NetworkId>
            </Label>
        </Container>
    );
};
