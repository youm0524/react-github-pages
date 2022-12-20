import styled from "@emotion/styled";
import home from "../assets/home.png";
import talk from "../assets/talk.png";
import kiki from "../assets/kiki.png";
import dashboard from "../assets/dashboard.png";
import setting from "../assets/setting.png";
import { useState, useEffect, useRef } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const MainContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: column;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const MainLeftWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #323859;
  width: 10%;
  height: 100%;
`;
const MainCenterWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 156px;
  background-color: white;
`;
const Menu = styled.div`
  display: flex;
  position: relative;

  padding: 1vw;
`;
const Icon = styled.img`
  width: 4vw;
  height: 4vw;
`;
const Title = styled.div`
  margin-top: 2vw;
  margin-left: 2vw;
  font-size: 1.5vw;
  font-style: bold;
`;
const Write = styled.input`
  width: 90%;
  height: 40%;
  border-radius: 1.5vw;
  margin-top: 2vw;
  margin-left: 4.5vw;
  &::placeholder {
    color: gray;
    font-weight: bold;
    font-size: 15px;
  }
`;
const Trans = styled.div`
  width: 90%;
  height: 40%;
  border: 0.15vw;
  border-radius: 1.5vw;
  border-style: solid;
  margin-top: 1.5vw;
  margin-left: 4.5vw;
`;
const ChangeBtn = styled.button`
  margin-top: 1vw;
  margin-left: 80vw;
  width: 5vw;
  height: 2vw;
  background-color: white;
  border-radius: 1.5vw;
  &:hover {
    background-color: pink;
  }
`;

const Translate = () => {
  const [chat, setChat] = useState("");
const [result,setResult] = useState([]);
  const onChange = (e) => {
    setChat(e.target.value);
    console.log(chat);
  };
  const data = { chat: chat };
  const config = { "Content-Type": "application/json" };

  const onSubmit = (e) => {
    
    axios
      .post("http://gabozago.shop/translation", data, config)
      .then((res)=>{setResult(res.data.result)})
      
      
  };

  return (
    <MainContainer>
      <MainLeftWrapper>
        <Menu>
          <Icon src={home} />
        </Menu>
        <Menu>
          <Icon src={talk} />
        </Menu>
        <Menu>
          <Icon src={kiki} />
        </Menu>
        <Menu>
          <Icon src={dashboard} />
        </Menu>
        <div style={{ margin: "13vw 0 0 0" }}>
          <Icon src={setting} />
        </div>
      </MainLeftWrapper>
      <MainCenterWrapper>
        <Title>키키번역</Title>
        <Write
          placeholder="어떤 용어든 쉽게 번역해드립니다!"
          onChange={onChange}
        ></Write>
        <ChangeBtn onClick={onSubmit}>번역</ChangeBtn>
        <Trans>
        {result}
        </Trans>
      </MainCenterWrapper>
    </MainContainer>
  );
};
export default Translate;
