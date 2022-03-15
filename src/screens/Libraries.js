import React, { Component } from "react";
import styled, { css } from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import "../style.css";
import Menu from "../components/menu/Menu";

function Libraries(props) {
  return (
    <Container>
      <NavBar>
        <Menu/>
        <Image5Row>
          <Image5 src={require("../assets/images/CAWIL_2.png")}></Image5>
          <BtnSignUp>
            <ButtonOverlay>
              <SignUp>Sign Up</SignUp>
            </ButtonOverlay>
          </BtnSignUp>
          <BtnLogIn>
            <ButtonOverlay>
              <LogIn>Log In</LogIn>
            </ButtonOverlay>
          </BtnLogIn>
        </Image5Row>
        <Image5RowFiller></Image5RowFiller>
      </NavBar>
      <Classes>
        <ClassScrollArea>
          <ClassesTitleHeading>Classes</ClassesTitleHeading>
          <Divider/>
          <Class1Row>
            <Class1>
              <Image2Stack>
                <Image2 src={require("../assets/images/py.jfif")}></Image2>
                <Rect6>
                  <ClassTitle>Basic Python</ClassTitle>
                  <JoinClassBtn>
                      <BtnJoinClass>
                        <ButtonOverlay>
                          <JoinTheClass>Join the Class</JoinTheClass>
                        </ButtonOverlay>
                      </BtnJoinClass>
                  </JoinClassBtn>
                </Rect6>
              </Image2Stack>
            </Class1>
            <Class2>
              <Image6Stack>
                <Image6 src={require("../assets/images/fd.jpg")}></Image6>
                <Rect12>
                  <IntroToTensorFlow>Intro to TensorFlow</IntroToTensorFlow>
                  <JoinClassBtn1>
                    <BtnJoinClass5>
                      <ButtonOverlay>
                        <JoinTheClass8>Join the Class</JoinTheClass8>
                      </ButtonOverlay>
                    </BtnJoinClass5>
                  </JoinClassBtn1>
                </Rect12>
              </Image6Stack>
            </Class2>
            <Class3>
              <Image7Stack>
                <Image7 src={require("../assets/images/html.jpg")}></Image7>
                <Rect13>
                  <BasicHtmlCssJs>Basic HTML/CSS/JS</BasicHtmlCssJs>
                  <JoinClassBtn2>
                    <BtnJoinClass6>
                      <ButtonOverlay>
                        <JoinTheClass9>Join the Class</JoinTheClass9>
                      </ButtonOverlay>
                    </BtnJoinClass6>
                  </JoinClassBtn2>
                </Rect13>
              </Image7Stack>
            </Class3>
          </Class1Row>
        </ClassScrollArea>
      </Classes>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-width: 1px;
  border-color: rgba(255,255,255,1);
  border-radius: 31px;
  flex-direction: column;
  border-style: solid;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const NavBar = styled.div`
  width: 1364px;
  height: 117px;
  flex-direction: row;
  display: flex;
  margin-top: -1px;
  margin-left: -1px;
`;

const Image5 = styled.img`
width: 590px;
height: 118px;
margin-left: 80px;
top: 16px;
`;

const BtnSignUp = styled.div`
  width: 110px;
  height: 44px;
  background-color: rgba(255,161,161,1);
  shadow-radius: 0px;
  overflow: visible;
  flex-direction: column;
  border-radius: 6px;
  margin-left: 290px;
  margin-top: 37px;
  border: none;
  box-shadow: 0px 3px 0px  1px rgba(0,0,0,1) ;
`;

const SignUp = styled.span`
font-family: Montserrat;
font-style: normal;
font-weight: 600;
  color: #121212;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

const BtnLogIn = styled.div`
  width: 110px;
  height: 44px;
  border-width: 1px;
  border-color: rgba(151,151,151,1);
  border-radius: 6px;
  flex-direction: column;
  display: flex;
  margin-left: 45px;
  margin-top: 37px;
  border-style: solid;
`;

const LogIn = styled.span`
font-family: Montserrat;
font-style: normal;
font-weight: 700;
color: #979797;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

const Image5Row = styled.div`
  height: 118px;
  flex-direction: row;
  display: flex;
`;

const Image5RowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Classes = styled.div`
  width: 1364px;
  height: 554px;
  flex-direction: column;
  display: flex;
  margin-top: 88px;
  margin-left: -31px;
`;

const ClassScrollArea = styled.div`
  overflow-x: scroll;
  width: 1366px;
  background-color: #F2F2F2;
  height: 556px;
  flex-direction: column;
  display: flex;
  margin-left: 30px;
width: 1420px;
height: 559px;
left: 0px;
top: 739px;
`;

const ClassesTitleHeading = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  color: #121212;
  font-size: 36px;
  width: 296px;
  height: 55px;
  text-align: center;
  margin-top: 30px;
  margin-left: 590px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  width: 112px;
  height: 8px;
  left: 637px;
  top: 830px;
  background-color: rgba(61,64,91,1);
  margin-top: 26px;
  margin-left: 680px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
`;

const Class1 = styled.div`
  width: 419px;
  height: 252px;
  flex-direction: column;
  display: flex;
  margin-top: 2px;
`;

const Image2 = styled.img`
  top: 1px;
  left: 0px;
  width: 400px;
  height: 251px;
  position: absolute;
  border-width: 1px;
  border-color: #000000;
  border-radius: 31px;
  opacity: 0.2;
  border-style: solid;
  object-fit: stretch;
`;

const Rect6 = styled.div`
  top: 0px;
  left: 1px;
  width: 400px;
  height: 251px;
  position: absolute;
  overflow: visible;
  border-radius: 31px;
  flex-direction: column;
  display: flex;
  box-shadow: -5px 5px 5px  1px rgba(136,136,136,1) ;
`;

const ClassTitle = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  color: #121212;
  font-size: 30px;
  height: 46px;
  width: 206px;
  text-align: center;
  margin-top: 80px;
  margin-left: 97px;
`;

const JoinClassBtn = styled.div`
  width: 184px;
  height: 54px;
  flex-direction: column;
  display: flex;
  margin-top: 13px;
  margin-left: 108px;
`;

const BtnJoinClass = styled.div`
  background-color: rgba(18,148,242,1);
  border-radius: 6px;
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  border: none;
`;

const JoinTheClass = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  color: rgba(255,255,255,1);
  font-size: 20px;
  height: 30px;
  width: 150px;
  text-align: center;
  margin-top: 12px;
`;

const Image2Stack = styled.div`
  width: 401px;
  height: 252px;
  margin-left: -1px;
  position: relative;
`;

const Class2 = styled.div`
  width: 419px;
  height: 252px;
  flex-direction: column;
  display: flex;
  margin-left: 18px;
  margin-top: 2px;
`;

const Image6 = styled.img`
  left: 0px;
  width: 400px;
  height: 251px;
  position: absolute;
  top: 1px;
  opacity: 0.2;
  border-radius: 31px;
  object-fit: stretch;
`;

const Rect12 = styled.div`
  top: 0px;
  left: 0px;
  width: 400px;
  height: 251px;
  position: absolute;
  overflow: visible;
  border-radius: 31px;
  flex-direction: column;
  display: flex;
  box-shadow: -5px 5px 5px  1px rgba(136,136,136,1) ;
`;

const IntroToTensorFlow = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  color: #121212;
  font-size: 30px;
  height: 46px;
  width: 322px;
  text-align: center;
  margin-top: 80px;
  margin-left: 39px;
`;

const JoinClassBtn1 = styled.div`
  width: 184px;
  height: 54px;
  flex-direction: column;
  display: flex;
  margin-top: 13px;
  margin-left: 108px;
`;

const BtnJoinClass5 = styled.div`
  background-color: rgba(18,148,242,1);
  border-radius: 6px;
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  border: none;
`;

const JoinTheClass8 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  color: rgba(255,255,255,1);
  font-size: 20px;
  height: 30px;
  width: 150px;
  text-align: center;
  margin-top: 12px;
`;

const Image6Stack = styled.div`
  width: 400px;
  height: 252px;
  position: relative;
`;

const Class3 = styled.div`
  width: 419px;
  height: 252px;
  flex-direction: column;
  display: flex;
  margin-left: 14px;
`;

const Image7 = styled.img`
  top: 1px;
  left: 0px;
  width: 400px;
  height: 251px;
  position: absolute;
  background-color: rgba(15,15, 15,0.31);
  opacity: 0.2;
  border-radius: 31px;
  object-fit: stretch;
`;

const Rect13 = styled.div`
  top: 0px;
  left: 1px;
  width: 400px;
  height: 251px;
  position: absolute;
  overflow: visible;
  border-radius: 31px;
  flex-direction: column;
  display: flex;
  box-shadow: -5px 5px 5px  1px rgba(136,136,136,1) ;
`;

const BasicHtmlCssJs = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  color: #121212;
  font-size: 30px;
  height: 46px;
  width: 322px;
  text-align: center;
  margin-top: 80px;
  margin-left: 39px;
`;

const JoinClassBtn2 = styled.div`
  width: 184px;
  height: 54px;
  flex-direction: column;
  display: flex;
  margin-top: 13px;
  margin-left: 108px;
`;

const BtnJoinClass6 = styled.div`
  background-color: rgba(18,148,242,1);
  border-radius: 6px;
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  border: none;
`;

const JoinTheClass9 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  color: rgba(255,255,255,1);
  font-size: 20px;
  height: 30px;
  width: 150px;
  text-align: center;
  margin-top: 12px;
`;

const Image7Stack = styled.div`
  width: 401px;
  height: 252px;
  margin-left: -1px;
  position: relative;
`;

const Class1Row = styled.div`
  height: 254px;
  flex-direction: row;
  display: flex;
  margin-top: 63px;
  margin-left: 60px;
  margin-right: 20px;
  flex: 0 0 auto;
`;

export default Libraries;
