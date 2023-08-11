import React from 'react';
import { RegisterButton as Buttons } from './styles'

function RegisterButton({ children, ...props }) {

    return <Buttons {...props} > {children} </Buttons>
}

export default RegisterButton;