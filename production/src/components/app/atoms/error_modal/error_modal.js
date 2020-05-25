import React from 'react';
import {Container, Message, CloseIcon, CloseIconCon, Wrapper, Title} from './error_modal_styles';
import {colors} from '../../../../styles/global/colors';

const ErrorModal = props => {
    return (
        <Wrapper>
            <Container>
                <Title>Whoops, something went wrong!</Title>
                <Message>
                    {props.errorMsg}
                </Message>
                <CloseIconCon>
                            <CloseIcon onClick={props.closeErrorMsg} color={colors.white} size="1.5em"/>
                </CloseIconCon>
            </Container>
        </Wrapper>
    )
}

export default ErrorModal;
