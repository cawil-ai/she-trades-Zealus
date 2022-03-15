import React, { Component } from "react";
import styled, { css } from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import "../style.css";
import Menu from "../components/menu/Menu";

function Index(props) {
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
      <ZealusWomenInTechColumnRow>
        <ZealusWomenInTechColumn>
          <ZealusWomenInTech>Zealus Women {"\n"}in Tech</ZealusWomenInTech>
          <Text>Learn new things in tech for women</Text>
          <BtnSignUpFree>
            <ButtonOverlay>
              <SignUpForFree>Sign Up for Free</SignUpForFree>
            </ButtonOverlay>
          </BtnSignUpFree>
        </ZealusWomenInTechColumn>
        <ZealusWomenInTechColumnFiller></ZealusWomenInTechColumnFiller>
        <Image
          src={require("../assets/images/Miroodles_Color_Composition.png")}
        ></Image>
      </ZealusWomenInTechColumnRow>
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
      <FreeClass>
        <ScrollAreaFreeClass>
          <FreeClassHeading>Free Class</FreeClassHeading>
          <FreeClass1Row>
            <FreeClass1>
              <Rect10>
                <FreeClassTitle>Artificial Intelligence</FreeClassTitle>
                <IconCalendarRow>
                  <FontAwesomeIcon
                    name="calendar"
                    style={{
                      color: "rgba(211,210,210,1)",
                      fontSize: 40,
                      height: 40,
                      width: 37
                    }}
                  ></FontAwesomeIcon>
                  <CalendarDetails>Monday, 28 June 2021</CalendarDetails>
                  <FontAwesomeIcon
                    name="user"
                    style={{
                      color: "rgba(211,210,210,1)",
                      fontSize: 40,
                      height: 40,
                      width: 28,
                      marginLeft: 46
                    }}
                  ></FontAwesomeIcon>
                  <PersonDetails>Mr. Mark Jefferson</PersonDetails>
                </IconCalendarRow>
                <IconClockRow>
                  <FontAwesomeIcon
                    name="clock-o"
                    style={{
                      color: "rgba(211,210,210,1)",
                      fontSize: 40,
                      height: 40,
                      width: 35
                    }}
                  ></FontAwesomeIcon>
                  <TimeDetails>02:00 - 03:30 PM</TimeDetails>
                  <FontAwesomeIcon
                    name="video-camera"
                    style={{
                      color: "rgba(211,210,210,1)",
                      fontSize: 40,
                      height: 40,
                      width: 40,
                      marginLeft: 76
                    }}
                  ></FontAwesomeIcon>
                  <MeetingDetails>Zoom</MeetingDetails>
                </IconClockRow>
                <Students>Students</Students>
                <BodyText>25 people joined the class</BodyText>
                  <BtnJoinClass3>
                    <ButtonOverlay>
                      <JoinTheClass6>Join the Class</JoinTheClass6>
                    </ButtonOverlay>
                  </BtnJoinClass3>
              </Rect10>
            </FreeClass1>
            <FreeClass2>
              <Rect11>
                <FreeClassTitle1>Basic Data Science</FreeClassTitle1>
                <IconCalendar1Row>
                  <FontAwesomeIcon
                    name="calendar"
                    style={{
                      color: "rgba(211,210,210,1)",
                      fontSize: 40,
                      height: 40,
                      width: 37
                    }}
                  ></FontAwesomeIcon>
                  <CalendarDetails1>Monday, 28 June 2021</CalendarDetails1>
                  <FontAwesomeIcon
                    name="user"
                    style={{
                      color: "rgba(211,210,210,1)",
                      fontSize: 40,
                      height: 40,
                      width: 28,
                      marginLeft: 46
                    }}
                  ></FontAwesomeIcon>
                  <PersonDetails1>Mr. Mark Jefferson</PersonDetails1>
                </IconCalendar1Row>
                <IconClock1Row>
                  <FontAwesomeIcon
                    name="clock-o"
                    style={{
                      color: "rgba(211,210,210,1)",
                      fontSize: 40,
                      height: 40,
                      width: 35
                    }}
                  ></FontAwesomeIcon>
                  <TimeDetails1>02:00 - 03:30 PM</TimeDetails1>
                  <FontAwesomeIcon
                    name="video-camera"
                    style={{
                      color: "rgba(211,210,210,1)",
                      fontSize: 40,
                      height: 40,
                      width: 40,
                      marginLeft: 76
                    }}
                  ></FontAwesomeIcon>
                  <MeetingDetails1>Zoom</MeetingDetails1>
                </IconClock1Row>
                <Students1>Students</Students1>
                <BodyText1>25 people joined the class</BodyText1>
                  <BtnJoinClass4>
                    <ButtonOverlay>
                      <JoinTheClass7>Join the Class</JoinTheClass7>
                    </ButtonOverlay>
                  </BtnJoinClass4>
              </Rect11>
            </FreeClass2>
          </FreeClass1Row>
        </ScrollAreaFreeClass>
      </FreeClass>
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

const ZealusWomenInTech = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  color: #121212;
  font-size: 72px;
  width: 589px;
  height: 198px;
`;

const Text = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 24px;
  width: 490px;
  height: 41px;
`;

const BtnSignUpFree = styled.div`
  width: 282px;
  height: 56px;
  background-color: rgba(255,161,161,1);
  border-radius: 6px;
  flex-direction: column;
  display: flex;
  margin-top: 29px;
  border: none;
`;

const SignUpForFree = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  color: #121212;
  font-size: 18px;
  width: 234px;
  height: 20px;
  text-align: center;
  line-height: 17px;
  margin-top: 17px;
`;

const ZealusWomenInTechColumn = styled.div`
  width: 589px;
  flex-direction: column;
  display: flex;
  margin-top: 54px;
  margin-bottom: 58px;
`;

const ZealusWomenInTechColumnFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Image = styled.img`
width: 494.45px;
height: 436.15px;
left: 781.27px;
top: 212.43px;
`;

const ZealusWomenInTechColumnRow = styled.div`
  height: 436px;
  flex-direction: row;
  display: flex;
  margin-top: 48px;
  margin-left: 141px;
  margin-right: 99px;
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

const FreeClass = styled.div`
width: 1420px;
height: 559px;
  flex-direction: column;
  display: flex;
  margin-top: 2px;
  margin-left: 1px;
`;

const ScrollAreaFreeClass = styled.div`
  overflow-x: scroll;
  background-color: rgba(255,190,190,1);
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const FreeClassHeading = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  color: #121212;
  font-size: 36px;
  margin-top: 44px;
  margin-left: 624px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
`;

const FreeClass1 = styled.div`
  width: 457px;
  height: 310px;
  flex-direction: column;
  display: flex;
  margin-top: 1px;
`;

const Rect10 = styled.div`
  width: 457px;
  height: 312px;
  background-color: rgba(255,255,255,1);
  border-radius: 10px;
  border-width: 1px;
  border-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
  border-style: solid;
  box-shadow: 0px 30px 60px rgba(32, 56, 85, 0.15);
`;

const FreeClassTitle = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  color: #121212;
  font-size: 18px;
  margin-top: 24px;
  margin-left: 28px;
`;

const CalendarDetails = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(130,130,130,1);
  font-size: 12px;
  margin-left: 15px;
  margin-top: 10px;
`;

const PersonDetails = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(130,130,130,1);
  font-size: 12px;
  margin-left: 17px;
  margin-top: 14px;
`;

const IconCalendarRow = styled.div`
  height: 40px;
  flex-direction: row;
  display: flex;
  margin-top: 16px;
  margin-left: 28px;
  margin-right: 49px;
`;

const TimeDetails = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(130,130,130,1);
  font-size: 12px;
  margin-left: 16px;
  margin-top: 11px;
`;

const MeetingDetails = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(130,130,130,1);
  font-size: 12px;
  margin-left: 11px;
  margin-top: 11px;
`;

const IconClockRow = styled.div`
  height: 40px;
  flex-direction: row;
  display: flex;
  margin-top: 12px;
  margin-left: 28px;
  margin-right: 120px;
`;

const Students = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  color: #121212;
  font-size: 13px;
  margin-top: 17px;
  margin-left: 28px;
`;

const BodyText = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 11px;
  margin-top: 5px;
  margin-left: 28px;
`;

const BtnJoinClass3 = styled.div`
  width: 413px;
  height: 38px;
  background-color: rgba(18,148,242,1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  margin-top: 25px;
  margin-left: 22px;
  border: none;
`;

const JoinTheClass6 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  color: rgba(255,255,255,1);
  font-size: 16px;
  text-align: center;
  margin-top: 7px;
`;

const FreeClass2 = styled.div`
  width: 457px;
  height: 310px;
  flex-direction: column;
  display: flex;
  margin-left: 76px;
`;

const Rect11 = styled.div`
  width: 457px;
  height: 312px;
  background-color: rgba(255,255,255,1);
  border-radius: 10px;
  border-width: 1px;
  border-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
  border-style: solid;
  box-shadow: 0px 30px 60px rgba(32, 56, 85, 0.15);
`;

const FreeClassTitle1 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  color: #121212;
  font-size: 18px;
  margin-top: 24px;
  margin-left: 28px;
`;

const CalendarDetails1 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(130,130,130,1);
  font-size: 12px;
  margin-left: 15px;
  margin-top: 10px;
`;

const PersonDetails1 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(130,130,130,1);
  font-size: 12px;
  margin-left: 17px;
  margin-top: 14px;
`;

const IconCalendar1Row = styled.div`
  height: 40px;
  flex-direction: row;
  display: flex;
  margin-top: 16px;
  margin-left: 28px;
  margin-right: 49px;
`;

const TimeDetails1 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(130,130,130,1);
  font-size: 12px;
  margin-left: 16px;
  margin-top: 11px;
`;

const MeetingDetails1 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(130,130,130,1);
  font-size: 12px;
  margin-left: 11px;
  margin-top: 11px;
`;

const IconClock1Row = styled.div`
  height: 40px;
  flex-direction: row;
  display: flex;
  margin-top: 12px;
  margin-left: 28px;
  margin-right: 120px;
`;

const Students1 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  color: #121212;
  font-size: 13px;
  margin-top: 17px;
  margin-left: 28px;
`;

const BodyText1 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 11px;
  margin-top: 5px;
  margin-left: 28px;
`;

const BtnJoinClass4 = styled.div`
  width: 413px;
  height: 38px;
  background-color: rgba(18,148,242,1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  margin-top: 25px;
  margin-left: 22px;
  border: none;
`;

const JoinTheClass7 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  color: rgba(255,255,255,1);
  font-size: 16px;
  text-align: center;
  margin-top: 7px;
`;

const FreeClass1Row = styled.div`
  height: 311px;
  flex-direction: row;
  display: flex;
  margin-top: 32px;
  margin-left: 203px;
  margin-right: 171px;
  flex: 0 0 auto;
`;

export default Index;
