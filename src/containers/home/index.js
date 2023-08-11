import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import Buguer from '../../assets/burguerImg.png';

import ImgArrowRight from '../../assets/arrow-circle-right.png'
import H1 from '../../components/title'
import ContainerItens from '../../components/containerItens'
import RegisterButton from '../../components/button'

import {
  Container,
  ImageHeader,
  InputName,
  Input
} from './styles';

const App = () => {

  const [requestsUsers, setRequestUsers] = useState([]);
  const request = useRef();
  const requestName = useRef();
  const navigate = useNavigate();

  async function addNewRequest() {
    const { data: newUser } = await axios.post("http://localhost:3001/order", {

      orderUser: request.current.value,
      clientName: requestName.current.value

    });

    setRequestUsers([...requestsUsers, newUser]);
    navigate("/usuarios");
  };


  return (
    <Container>

      <ImageHeader alt='logo' src={Buguer} />

      <ContainerItens >

        <H1>Faça seu pedido!</H1>

        <InputName>Pedidos:</InputName>
        <Input ref={request} placeholder='1-X bacon, 1 Coca-Cola' ></Input>

        <InputName>Nome do cliente:</InputName>
        <Input ref={requestName} placeholder='Elon Musk'></Input>

        <RegisterButton button={true} onClick={addNewRequest}>
          Cadastrar <img alt='seta' src={ImgArrowRight} />
        </RegisterButton>

      </ContainerItens>
    </Container>

  );

};

export default App;