import React, { Component } from "react";
import styled, { css } from "styled-components";
import "../style.css";
import Menu from "../components/menu/Menu";

function JobPosting(props) {
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
      <Jobs>
          <ClassesTitleHeading>Jobs</ClassesTitleHeading>
          <Divider/>
          <PostingRow1>
            <Posting1>
              <RectPosting1>
                <ImagePosting1 src={require("../assets/images/pentagram-black-logo-800.png")}></ImagePosting1>
                
              </RectPosting1>
            </Posting1>
          </PostingRow1>
    </Jobs>
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

// const ClassScrollArea = styled.div`
//   overflow-x: scroll;
//   width: 1366px;
//   height: 556px;
//   flex-direction: column;
//   display: flex;
//   margin-left: 30px;
// width: 1420px;
// height: 559px;
// left: 0px;
// top: 739px;
// `;

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
  background-color: #FFA1A1;
  margin-top: 26px;
  margin-left: 680px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
`;

const Jobs = styled.div`
width: 1364px;
height: 554px;
flex-direction: row;
display: flex;
margin-top: 23px;
margin-left: 65px;
margin-bottom: 100px;
`;

const PostingRow1 = styled.div`
height: 254px;
flex-direction: row;
display: flex;
margin-top: 63px;
margin-left: 60px;
margin-right: 20px;
margin-bottom: 20px;
flex: 0 0 auto;
`;

const Posting1 = styled.div`
    height: 254px;
  flex-direction: row;
  display: flex;
  margin-top: 63px;
  margin-left: 60px;
  margin-right: 20px;
  margin-bottom: 100px;
  padding-bottom: 100px;
  flex: 0 0 auto;
`;

const RectPosting1 = styled.div`
position: absolute;
width: 1110px;
height: 122px;
overflow: visible;
display: flex
left: 200px;
top: 307px;
background: #FFFFFF;
box-shadow: 5px 4px 10px 10px rgba(0, 0, 0, 0.05);
border-radius: 20px;
`;

const ImagePosting1 = styled.image`
position: absolute;
width: 235px;
height: 52px;
left: 145px;
top: 679px;
`;

export default JobPosting;
