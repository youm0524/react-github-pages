import React, { useCallback, useRef, useState, useEffect } from 'react';
import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import styled from "@emotion/styled";

const ChatWrap = styled.div`
  width:500px;
  background-color: #ededed;
  margin: 50px auto;
  padding:20px 10px;
  border-radius: 20px;
  box-shadow:  41px 41px 82px #c9c9c9,
    -41px -41px 82px #ffffff;
`;

const Chatt = styled.div`
width: 100%;
	margin: 0 auto;
`;

const Title = styled.h1`

    font-size: 30pt;
    text-align: center;
    margin-bottom: 20px;
`;

const Talk = styled.div`
    width: 100%;
    height: 400px;
    overflow-y: auto;
    border-radius: 18px;
    position: relative;
`;
const SendZone = styled.div`
  margin-top: 10px;
  display: flex;
 
`;

const Msg = styled.textarea`
width:80%;
`
const Chat = () => {
    const [msg, setMsg] = useState("");
    const [name, setName] = useState("");
    const [chatt, setChatt] = useState([]);
    const [chkLog, setChkLog] = useState(false);
    const [socketData, setSocketData] = useState();

    const ws = useRef(null);  

    const msgBox = chatt.map((item, idx) => (
        <div key={idx} className={item.name === name ? 'me' : 'other'}>
            <span><b>{item.name}</b></span> [ {item.date} ]<br/>
            <span>{item.msg}</span>
        </div>
    ));

    useEffect(() => {
        if(socketData !== undefined) {
            const tempData = chatt.concat(socketData);
            console.log(tempData);
            setChatt(tempData);
        }
    }, [socketData]);

    const GlobalStyle = createGlobalStyle`  //css 초기화가 된 component
        ${reset}
    `;


    const onText = event => {
        console.log(event.target.value);
        setMsg(event.target.value);
    }

    
    const webSocketLogin = useCallback(() => {
        ws.current = new WebSocket("ws://gabozago.shop/socket/chatt");

        ws.current.onmessage = (message) => {
            const dataSet = JSON.parse(message.data);
            setSocketData(dataSet);
        }
    });


    const send = useCallback(() => {
        if(!chkLog) {
            if(name === "") {
                alert("이름을 입력하세요.");
                document.getElementById("name").focus();
                return;
            }
            webSocketLogin();
            setChkLog(true);
        }

        if(msg !== ''){
            const data = {
                name,
                msg,
                date: new Date().toLocaleString(),
            };  //전송 데이터(JSON)

            const temp = JSON.stringify(data);
            
            if(ws.current.readyState === 0) {   //readyState는 웹 소켓 연결 상태를 나타냄
                ws.current.onopen = () => { //webSocket이 맺어지고 난 후, 실행
                    console.log(ws.current.readyState);
                    ws.current.send(temp);
                }
            }else {
                ws.current.send(temp);
            }
        }else {
            alert("메세지를 입력하세요.");
            document.getElementById("msg").focus();
            return;
        }
        setMsg("");
    });
    //webSocket
    //webSocket
    //webSocket
    //webSocket
    //webSocket
    //webSocket


    
    return (
        <>
          <GlobalStyle/>
            <ChatWrap>
                <Chatt>
                    <Title>WORKi TALKi</Title>
                    <br/>
                    <Talk>
                        <div className='talk-shadow'></div>
                        {msgBox}
                    </Talk>
                    <input disabled={chkLog}
                        placeholder='이름을 입력하세요.' 
                        type='text' 
                        id='name' 
                        value={name} 
                        onChange={(event => setName(event.target.value))}/>
                    <SendZone>
                        <Msg value={msg} onChange={onText}
                            onKeyDown={(ev) => {if(ev.keyCode === 13){send();}}}></Msg>
                        <input type='button' value='전송' id='btnSend' onClick={send}/>
                    </SendZone>
                </Chatt>
            </ChatWrap>
        </>
    );
};

export default Chat;