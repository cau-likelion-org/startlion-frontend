import React from "react";
import { styled } from "twin.macro";
import Instagram from "@/svg/footer/insta.svg";
import MessageSvg from "@/svg/footer/message.svg";
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
  font-weight: 800;
`;

const Footer = () => {
  return (
    <FooterBar>
      <FooterOptionWrapper>
        <div className="text-[24px]">중앙대학교 멋쟁이 사자처럼</div>
        <div className="text-[16px]">어쩌구 저쩌구</div>
      </FooterOptionWrapper>
      <FooterOptionWrapper>
        <div className="text-[24px]">CONTACT</div>
        <div className="flex justify-start items-center gap-5">
          <button
            onClick={() =>
              window.open("https://www.instagram.com/likelion_cau/", "_blank")
            }
          >
            <Instagram />
          </button>
          <button
            onClick={() => window.open("mailto:puang@likelion.org", "_blank")}
          >
            <MessageSvg />
          </button>
        </div>
      </FooterOptionWrapper>
    </FooterBar>
  );
};

export default Footer;
