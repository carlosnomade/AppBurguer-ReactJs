import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import Buguer from '../../assets/requestsPeople.png';


import ImgArrowRight from '../../assets/arrow-circle-left.png'
import Trash from '../../assets/trash.png';

import  H1  from '../../components/title'
import ContainerItens from '../../components/containerItens'
import RegisterButton from '../../components/button'


import {
  Container,
  ImageHeader,
  Requests,
  InputResult
} from './styles';

const Users = () => {
  const [requestsUsers, setRequestUsers] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/order");

      setRequestUsers(newUsers);
    }

    fetchUsers();
    
  }, [requestsUsers]);

  async function deleteRequest(UsersId) {
    await axios.delete(`http://localhost:3001/order/${UsersId}`)
    const newRequest = requestsUsers.filter((user) => user.id !== UsersId)


    setRequestUsers(newRequest);

  }

  function goBackPage(){
    navigate("/");
  }

  return (
    <Container>

      <ImageHeader alt='logo' src={Buguer} />

      <ContainerItens isBlur={true}>

        <H1>Pedios Cadastrados!</H1>

        <ul>
          {requestsUsers.map((request) => {

            return (

              <Requests key={request.id}>

                <InputResult>

                  <p>Pedido: {request.orderUser}</p>
                  <h3>Cliente: {request.clientName}</h3>

                </InputResult>

                <button onClick={() => deleteRequest(request.id)}>
                  <img src={Trash} alt='lixeira' /> 
                </button>

              </Requests>

            );
          })}
        </ul>

        <RegisterButton isBack={true} onClick={goBackPage} >
           <img alt='seta' src={ImgArrowRight} />Voltar
        </RegisterButton>

      </ContainerItens>
    </Container>

  );

};

export default Users;