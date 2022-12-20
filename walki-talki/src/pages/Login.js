import styled from "@emotion/styled";
import { useState, useEffect, useRef } from "react";
//import { useForm } from "react-hook-form";
//import axios from "axios";
//import { useRecoilState, useSetRecoilState } from "recoil";
//import { userState } from "../Recoil/atoms/atom";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/WORKiTALKi.png";
import mainlogo from "../assets/logo.png";
import slogan from "../assets/slogan.png";
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
  width: 5vw;
  height: 7.5vw;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;
function Login() {
  const imageInput = useRef();

  const onCickImageUpload = () => {
    imageInput.current.click();
  };
  const [img, setImg] = useState({
    image_file: "",
    preview_URL:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  });
  const [inputs, setInputs] = useState({
    name: "",
  });
  const nameInput = useRef(null);

  const name = inputs;

  const onChange = (e) => {
    const value = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      name: value,
    });
  };
  const onReset = () => {
    setInputs({
      name: "",
    });
    nameInput.current.focus();
  };

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
  const [error, setErrMsg] = useState("");
  const navigate = useNavigate();
  const goSignup = () => {
    navigate("/signup");
  };
  const goHome = () =>{
    navigate("/home")
  }
  //const [user, setUser] = useRecoilState(userState);
  //const navigate = useNavigate();
  //const location = useLocation();
  //const from = location.state?.from?.pathname || "/";
  //   const {
  //     register,
  //     formState: { errors },
  //     handleSubmit,
  //     setFocus,
  //   } = useForm({
  //     mode: "onChange",
  //   });

  //   useEffect(() => {
  //     setFocus("email");
  //   }, [setFocus]);

  const onLogin = async (data) => {
    // try {
    //   axios
    //     .post("/user/login", {
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       email: data.email,
    //       password: data.password,
    //     })
    //     .then((res) => {
    //       if (res.status === 200) {
    //         console.log(res)
    //         setUser(res.data.data);
    //       }
    //     }).then(()=>{
    //       navigate(from, { replace: true });
    //     });
    // } catch (err) {
    //   console.log(err);
    //   if (!err?.response) {
    //     setErrMsg("서버로부터 응답이 없습니다");
    //   } else if (err.response?.status === 400) {
    //     setErrMsg("이메일 또는 패스워드를 확인해주세요");
    //     console.log(error);
    //   } else if (err.response?.status === 401) {
    //     setErrMsg("허가되지않은 접근입니다");
    //   } else {
    //     setErrMsg("Login Failed");
    //   }
    // }
    //     fetch("http://3.39.24.209:80/user/login", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         email: data.email,
    //         password: data.password,
    //       }),
    //     })
    //       .then((response) => response.json())
    //       .then((data) => {
    //         console.log(data);
    //         setUser({ data });
    //       })
    //       .then(() => {
    //         navigate(from, { replace: true });
    //       });
  };

  return (
    <MainContainer>
      <Container>
        <div style={{ margin: "10vw 0 0 0" }}>
          <img src={logo} />
        </div>
        <div style={{ margin: "20px 0 20px 0" }}>
          <ImgPreview src={mainlogo} />
        </div>

        <div>
          <ImgPreview src={slogan} style={{width:'27vw', height:'3vw'}} />
          
        </div>
        <Form>
          <InputContainer>
            <Input type={"email"} id="Email" placeholder="please enter ur ID" />
          </InputContainer>
          <InputContainer>
            <Input
              type={"password"}
              id="password"
              placeholder="please enter ur PW"
              //   {...register("password", {
              //     required: true,
              //     minLength: 8,
              //   })}
            />
          </InputContainer>
          <InputContainer>
            <SubmitBtn onClick  ={goHome}>로그인</SubmitBtn>
          </InputContainer>
          <SubmitBtn onClick={goSignup}>회원가입</SubmitBtn>
        </Form>
      </Container>
    </MainContainer>
  );
}

export default Login;
