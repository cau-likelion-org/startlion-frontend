import React from "react";
import { styled } from "twin.macro";
import logo from "@/img/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { userInfoState } from "@/store/atoms";

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
  box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.25);
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
  const loginUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/login`;
  const userToken = useRecoilValue(userInfoState);

  const handleClick = () => {
    window.location.assign(loginUrl);
  };
  const router = useRouter();
  return (
    <NavBar>
      <Image src={logo} alt="멋사로고" onClick={() => router.push("/")} />
      <NavOptionWrapper>
        <button
          onClick={() =>
            window.open("https://cau-likelion.org/project", "_blank")
          }
        >
          프로젝트
        </button>
        <button onClick={() => router.push("/interview")}>수료자 인터뷰</button>
        <button onClick={() => router.push("/FAQ")}>FAQ</button>
        {userToken.accessToken === "" ? (
          <button onClick={handleClick}>로그인</button>
        ) : (
          <button onClick={() => router.push("/mypage")}>마이페이지</button>
        )}
      </NavOptionWrapper>
    </NavBar>
  );
};

export default Nav;
