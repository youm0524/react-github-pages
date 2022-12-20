import styled from "@emotion/styled";
import home from "../assets/home.png";
import talk from "../assets/talk.png";
import kiki from "../assets/kiki.png";
import dashboard from "../assets/dashboard.png";
import setting from "../assets/setting.png"
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
const Search = styled.input`
width:97%;
height: 10%;
border-radius: 2vw;
margin-top:1vw;
margin-left: 1vw;
margin-bottom: 1vw;
`
const Profile = styled.div`
border-width: 1px 0px 0.5px 0px;
border-style: solid;
height:17%;
width: 100%;
background-color: white;
`
const Channel = styled.div`
height: 35%;
width:100%;
margin-top:1vw;
background-color: white;
border-width: 1px 0px 1px 0px;
border-style: solid;
`
const Colleague = styled.div`
height:40%;
width: 100%;
margin-top:1vw;
border-width: 1px 0px 1px 0px;
border-style: solid;
`
const ImgPreview = styled.img`
  width: 5vw;
  height: 4.5vw;
margin:1vw 1vw 1vw 1vw;
border-radius: 1.5vw;

  align-items: center;
`;
const Home = () => {
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
        <div style={{margin:'13vw 0 0 0'}}>
            <Icon src = {setting}/>
        </div>

      </MainLeftWrapper>
      <MainCenterWrapper>
        <Search>

        </Search>
        <Profile>
        <ImgPreview src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
        </Profile>
        <div style={{fontSize:'20px',marginLeft:'1vw',marginTop:'0.4vw',fontWeight:'bold'}}>Channel</div>
        <Channel>

        </Channel>
        <div style={{fontSize:'20px',marginLeft:'1vw',marginTop:'0.4vw',fontWeight:'bold'}}>Colleague</div>
        <Colleague>
        </Colleague>
      </MainCenterWrapper>
    </MainContainer>
  );
};
export default Home;
