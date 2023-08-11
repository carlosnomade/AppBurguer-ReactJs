import styled from 'styled-components';


export const Container = styled.div` 
    background: #0A0A10;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    height: 100%;
    min-height: 100vh;
`;

export const ImageHeader = styled.img` 
    width: 300px;
    margin-top: 10px;
`;


export const InputName = styled.p`
    letter-spacing: -0.408px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #eee;
    margin-left: 25px;
`;

export const Input = styled.input`
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); 
    padding: 15px 20px 15px 25px;
    width: 342px;
    height: 58px;
    margin-bottom: 34px;
    border: none;
    outline: none;
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

