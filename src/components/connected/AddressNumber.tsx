import React, { useState } from 'react';
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

    const handleClick = () => {
        setHidden((prevState) => !prevState);
    };
    return (
        <Container>
            Address
            <Address>
                {hidden
                    ? `${accountAddress.substring(0, 6)}...`
                    : accountAddress}
                <Button type="button" onClick={handleClick}>
                    {hidden ? <EyeIcon /> : <HiddenIcon />}
                </Button>
            </Address>
        </Container>
    );
};
