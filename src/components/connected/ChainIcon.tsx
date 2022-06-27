import React from 'react';
import { ChainName } from 'src/constants/chainIdMap';
import styled from 'styled-components';
import { ReactComponent as BNB } from '../../assets/BNB.svg';
import { ReactComponent as ETH } from '../../assets/ETH.svg';
import { ReactComponent as MATIC } from '../../assets/MATIC.svg';

interface Props {
    chainName?: ChainName;
}

const BNBIcon = styled(BNB)`
    width: 40px;
`;
const ETHIcon = styled(ETH)`
    width: 40px;
`;
const MATICIcon = styled(MATIC)`
    width: 40px;
`;

/* eslint-disable react/jsx-key */

const iconMap = new Map([
    [ChainName.ETH, <ETHIcon />],
    [ChainName.RopstenETH, <ETHIcon />],
    [ChainName.RinkebyETH, <ETHIcon />],
    [ChainName.KovanETH, <ETHIcon />],
    [ChainName.GoerliETH, <ETHIcon />],
    [ChainName.BNB, <BNBIcon />],
    [ChainName.MATIC, <MATICIcon />],
    [undefined, <ETHIcon />],
]);

/* eslint-enable react/jsx-key */

export const ChainIcon = ({ chainName }: Props) => {
    const renderChainIcon = () => {
        const icon = iconMap.get(chainName);
        return icon;
    };
    return <>{renderChainIcon()}</>;
};
