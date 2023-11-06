import { Inter } from "next/font/google";
import tw, { css, styled } from "twin.macro";
import { useEffect, useRef, useState } from "react";
import FirstSection from "@/components/landing/FirstSection";
import SecondSection from "@/components/landing/SecondSection";
import ThirdSection from "@/components/landing/ThirdSection";
import FourthSection from "@/components/landing/FourthSection";
import LastSection from "@/components/landing/LastSection";

const inter = Inter({ subsets: ["latin"] });

const MainFrame = styled.div(() => [
  tw`flex w-screen h-[4000px] flex-col items-center justify-between relative`,
  css`
    transition: top 1s ease-in-out;
    /* top: ${-800 * (index - 1)}px; */
  `,
]);

const FrameBox = styled.div(() => [
  tw`w-screen h-[800px] flex flex-col items-center`,
]);

export default function Home() {
  const ref = useRef<number>(1);
  const [index, setIndex] = useState(1);
  const scrolling = useRef<boolean>(false);
  useEffect(() => {
    const wheelControl = (e: WheelEvent) => {
      if (scrolling.current) return;
      scrolling.current = true;
      e.preventDefault();
      if (e.deltaY > 0) {
        ref.current++;
      } else if (e.deltaY < 0) {
        ref.current--;
      }
      if (ref.current < 1) {
        ref.current = 1;
      } else if (ref.current > 5) {
        ref.current = 5;
      }
      setIndex(ref.current);

      setTimeout(() => {
        scrolling.current = false;
      }, 1000);
    };
    window.addEventListener("wheel", wheelControl, { passive: false });
    return () => {
      window.removeEventListener("wheel", wheelControl);
    };
  }, []);
  //h-[4260px] 이건 나중에..
  return (
    <MainFrame>
      <FrameBox>
        <FirstSection />
      </FrameBox>
      <FrameBox>
        <SecondSection />
      </FrameBox>
      <FrameBox>
        <ThirdSection />
      </FrameBox>
      <FrameBox>
        <FourthSection />
      </FrameBox>
      <FrameBox>
        <LastSection />
      </FrameBox>
    </MainFrame>
  );
}
