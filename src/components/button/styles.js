import styled from 'styled-components'

export const RegisterButton = styled.button`
    width: 342px;
    height: 74px;
    flex-shrink: 0;
    border-radius: 5px;
    background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.14)' : '#D93856'};
    border: none;
    margin-top: ${props => props.isBack ? '25px' : '10px'};;
    
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; 
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    cursor: pointer;
    text-decoration: none;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }

`;


