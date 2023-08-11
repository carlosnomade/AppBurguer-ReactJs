import styled from 'styled-components';

export const Container = styled.div` 
    background: #0A0A10;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
`;

export const ImageHeader = styled.img` 
    width: 300px;
    margin-top: 30px;
`;

export const TitleHeader = styled.h1`
    color: #FFF;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
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

export const Requests = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); 
    padding: auto 0;
    width: 342px;
    height: 101px;
    margin-top: 20px;

    border: none;
    outline: none;

    p {
        align-items: center;
        color: #fdfdfd;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 17px 0 0 0;
        padding-left: 20px;
        opacity: 0.8; 
    }

    h3 {
        align-items: center;
        color: #F1F1F1;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin: 10px 0 17px;
        padding-left: 20px;
    }


    button {       
        display: flex;
        background: none;
        border: none;
        cursor: pointer;
        padding-right: 20px;
    }

`
export const InputResult = styled.div`
    display: inline-block;
    align-items: center;
    margin: auto 0 auto 0;
    padding: auto 0 auto 0;

`



