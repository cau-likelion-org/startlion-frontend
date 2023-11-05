import React from "react";
import { styled } from "twin.macro";
import logo from "@/img/logo.png";
import Image from "next/image";

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px 20px 60px;
  height: 24px;
  background-color: transparent;
  position: sticky;
  top: 0;
`;

const NavOptionWrapper = styled.div`
  display: flex;
  gap: 42px;
  align-items: center;
  > button {
    font-size: 16px;
    font-weight: 700;
  }
`;

const Nav = () => {
  return (
    <NavBar>
      <Image src={logo} alt="멋사로고" />
      <NavOptionWrapper>
        <button>프로젝트</button>
        <button>수료자 인터뷰</button>
        <button>FAQ</button>
        <button>로그인</button>
      </NavOptionWrapper>
    </NavBar>
  );
};

export default Nav;
