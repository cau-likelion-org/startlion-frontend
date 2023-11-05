import React from "react";
import { styled } from "twin.macro";
import logo from "@/img/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

const NavBar = styled.div`
  z-index: 10;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px 20px 60px;
  height: 24px;
  background-color: white;
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
  const router = useRouter();
  return (
    <NavBar>
      <Image src={logo} alt="멋사로고" />
      <NavOptionWrapper>
        <button>프로젝트</button>
        <button onClick={() => router.push("/interview")}>수료자 인터뷰</button>
        <button onClick={() => router.push("/FAQ")}>FAQ</button>
        <button>로그인</button>
      </NavOptionWrapper>
    </NavBar>
  );
};

export default Nav;
