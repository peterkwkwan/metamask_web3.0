import React, { useState } from 'react';
import useWindowDimensions from 'src/hooks/useWindowDimensions';
import styled from 'styled-components';
import { ReactComponent as Eye } from '../../assets/eye.svg';
import { ReactComponent as Hidden } from '../../assets/hidden.svg';

interface Props {
    accountAddress: string;
}

const Container = styled.div`
    color: ${(props) => props.theme.palette.text.light};
    text-align: center;
`;

const Address = styled.h4`
    display: block;
    margin: 4px 0 0;
    color: ${(props) => props.theme.palette.text.main};
`;

const EyeIcon = styled(Eye)`
    height: 20px;
`;

const HiddenIcon = styled(Hidden)`
    height: 20px;
`;

const Button = styled.button`
    border: none;
    cursor: pointer;
    background: inherit;
`;
export const AccountNumber = ({ accountAddress }: Props) => {
    const [hidden, setHidden] = useState(true);
    const { height, width } = useWindowDimensions();

    const handleClick = () => {
        setHidden((prevState) => !prevState);
    };

    const parseAccountAddress = () => {
        const condensedAddress = `${accountAddress.substring(0, 6)}...`;

        if (width <= 768) {
            return condensedAddress;
        }
        if (hidden) return condensedAddress;
        return accountAddress;
    };
    return (
        <Container>
            Address
            <Address>
                {parseAccountAddress()}
                {width > 768 && (
                    <Button type="button" onClick={handleClick}>
                        {hidden ? <EyeIcon /> : <HiddenIcon />}
                    </Button>
                )}
            </Address>
        </Container>
    );
};
