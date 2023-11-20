import React from "react";
import { styled } from "twin.macro";

const FooterBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: auto 80px;
  height: 196px;
  background-color: transparent;
  box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

const FooterOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
`;

const Footer = () => {
  return (
    <FooterBar>
      <FooterOptionWrapper>
        <div>중앙대학교 멋쟁이 사자처럼</div>
        <div>어쩌구 저쩌구</div>
      </FooterOptionWrapper>
      <FooterOptionWrapper>
        <div>CONTACT</div>
        <button>버튼들</button>
      </FooterOptionWrapper>
    </FooterBar>
  );
};

export default Footer;
