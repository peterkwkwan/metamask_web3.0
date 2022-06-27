import React from 'react';
import styled from 'styled-components';
import { ReactComponent as FoxIcon } from '../assets/metamask-fox.svg';

interface Props {
    loading: boolean;
    unsupportedNetwork: boolean;
}

const MetaFox = styled(FoxIcon)`
    padding-left: 8px;
    height: 20px;
`;

const CircularSvg = styled.svg`
    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    position: relative;
    left: 8px;
    height: 20px;
    animation: rotate 2s linear infinite;
`;

const Circle = styled.circle`
    @keyframes animate-stroke {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
        }
    }
    fill: none;
    stroke: ${(props) => props.theme.palette.primary.main};
    stroke-width: 5px;
    stroke-linecap: round;
    stroke-dasharray: 10, 10;
    animation: animate-stroke 1.5s ease-in-out infinite;
`;

const ReloadIcon = styled.span`
    height: 20px;
    width: 20px;
    font-size: 16px;
    border-radius: 50%;
    margin-left: 8px;
    background-color: ${(props) => props.theme.palette.secondary.main};
    color: ${(props) => props.theme.palette.common.white};
`;

export const ButtonIcon = ({ loading, unsupportedNetwork }: Props) => {
    const renderIcon = () => {
        if (unsupportedNetwork) {
            return <ReloadIcon>!</ReloadIcon>;
        }
        if (loading) {
            return (
                <CircularSvg viewBox="25 25 50 50">
                    <Circle cx="50" cy="50" r="20" fill="none" />
                </CircularSvg>
            );
        }
        return <MetaFox />;
    };
    return renderIcon();
};
