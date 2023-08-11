import styled from 'styled-components'


export const ContainerItens = styled.div` 
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.20) 0.01%, rgba(255, 255, 255, 0.10) 100%);
    border-radius: 40px 40px 0px 0px;
    padding: 40px 36px;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: calc(100vh - 318px);

    ${props => props.isBlur && `
    backdrop-filter: blur(45px);
    min-height: calc(100vh - 312px);
`}
`;