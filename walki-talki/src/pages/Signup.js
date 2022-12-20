import styled from "@emotion/styled";
import { useState, useEffect, useRef } from "react";
//import { useForm } from "react-hook-form";
//import axios from "axios";
//import { useRecoilState, useSetRecoilState } from "recoil";
//import { userState } from "../Recoil/atoms/atom";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/WORKiTALKi.png";
import axios from "axios";
const Nickname = styled.input`
  &::placeholder {
    color: black;
    font-weight: bold;
    font-size: 15px;
  }
  border: none;
  &:hover {
    text-decoration: underline;
  }
  text-align: center;
`;
const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
  background-color: white;
  border-radius: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  padding: 10px;
`;

const InputContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;

  align-self: center;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 3px;
`;

const Input = styled.input`
  width: 25vw;
  height: 3vw;
  padding: 0 8px;
  background-color: #f9f8f8;
  border-radius: 3px;
  border: none;
`;
const Input2 = styled.input`
  width: 25vw;
  height: 3vw;
  padding: 0 8px;
  background-color: #f9f8f8;
  border-radius: 3px;
  border: none;
`;

const SubmitBtn = styled.button`
  width: 25vw;
  height: 3vw;
  padding: 0 8px;
  font-size: 13.6px;
  font-weight: 600;
  text-align: center;
  background-color: #f9f8f8;
  border: none;
  border-radius: 3px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 120px);
`;

const Profile = styled.button`
  border: none;
  background-color: white;
  align-self: center;
  display: flex;
  margin-left: 1.3vw;
  margin-top: 1vw;
  margin-bottom: 1vw;
  &:hover {
    text-decoration: underline;
  }
`;
const ImgPreview = styled.img`
  width: 7.5vw;
  height: 7.5vw;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;
function Signup() {
  const imageInput = useRef();
  const navigate = useNavigate();
  const onCickImageUpload = () => {
    imageInput.current.click();
  };
  const [img, setImg] = useState({
    image_file: "",
    preview_URL:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  });

  const getImg = (event) => {
    event.preventDefault();
    const fileReader = new FileReader();

    fileReader.readAsDataURL(event.target.files[0]);

    fileReader.onload = () => {
      setImg({
        image_file: event.target.files[0],
        preview_URL: fileReader.result,
      });
    };
  };
  const fileInput = useRef(null);
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  //   const [inputs, setInput] = useState({
  //     email: "",
  //     password: "",
  //     nickname: "",
  //   });
  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const onNicknameHandler = (e) => {
    setNickname(e.target.value);
  };
  //   const { email, password, nickname } = inputs;
  //   const onChange = (e) => {
  //     const { value, name } = e.target;
  //     setInput({
  //       ...inputs,
  //       [name]: value,
  //     });
  //     console.log(value)
  //   };

  console.log(email, nickname, password);
  const Sign = () => {
    
    axios({
      method: "POST",
      url:"http://gabozago.shop/join",
      headers: {
        "Content-Type": "application/json",
        Accept:"application/json",
      },
      data:{
      email: email,
      password: password,
      nickname: nickname,
      }
    }).then(function (response){
        console.log(response)
    }).then(()=>navigate("/login"));

    console.log(email, nickname, password);
  };

  return (
    <MainContainer>
      <Container>
        <div style={{ margin: "10vw 0 0 0" }}>
          <img src={logo} />
        </div>
        <div style={{ margin: "20px 0 20px 0" }}>
          <ImgPreview src={img.preview_URL} />
        </div>
        <div>
          <input
            ref={imageInput}
            type="file"
            style={{ display: "none" }}
            accept="image/jpg,impge/png,image/jpeg"
            name="profile_img"
            onChange={getImg}
          />

          <div>
            <Nickname
              type="text"
              placeholder="nickname"
              id="nickname"
              value={nickname}
              onChange={onNicknameHandler}
            />
            <Profile onClick={onCickImageUpload}>프로필 사진 설정하기</Profile>
          </div>
        </div>
        <Form>
          <InputContainer>
            <Input
              type="text"
              value={email}
              id="email"
              placeholder="please enter ur ID"
              onChange={onEmailHandler}
            />
          </InputContainer>
          <InputContainer>
            <Input2
              type="text"
              value={password}
              id="password"
              placeholder="please enter ur PW"
              onChange={onPasswordHandler}
            />
          </InputContainer>
        
        <SubmitBtn onClick={Sign} type="button">회원가입</SubmitBtn>
        </Form>
      </Container>
    </MainContainer>
  );
}

export default Signup;
