import React from 'react';
import styled from 'styled-components';
import { ReactComponent as BNB } from '../../assets/BNB.svg';
import { ReactComponent as ETH } from '../../assets/ETH.svg';
import { ReactComponent as MATIC } from '../../assets/MATIC.svg';

interface Props {
    coin: string;
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
    ['ETH', <ETHIcon />],
    ['RopstenETH', <ETHIcon />],
    ['BNB', <BNBIcon />],
    ['MATIC', <MATICIcon />],
]);

/* eslint-enable react/jsx-key */

export const CoinIcon = ({ coin }: Props) => {
    const renderCoin = () => {
        const icon = iconMap.get(coin);
        return icon;
    };
    return <>{renderCoin()}</>;
};
