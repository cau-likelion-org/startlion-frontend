import Image from "next/image";
import React from "react";
import { css, styled } from "twin.macro";
import questionLion from "@/img/interview/questionLion.png";

const QNABox = () => {
  //이부분은 나중에 바뀔 것..! 서버에서 받은걸로 하나하나 돌릴것이기 때문!
  return (
    <>
      <div>
        <QustionWrpper>
          <Image src={questionLion} alt="질문라이언" width={67} height={60} />
          <div>Q. 처음 멋사에 지원하셨던 이유는 무엇인가요?</div>
        </QustionWrpper>
        <AnswerWrapper>
          <div className="keypoint">
            개발자로서 진로에 대한 고민을 해결하고자 지원했어요.
          </div>
          <div>
            개발자로 진로를 결정하며 개발 공부의 계획은 세웠으나 어떻게 공부해야
            할지 막막하던 차에 답을 구하고자 멋사에 지원하게 되었어요. 멋사에서
            원하는 만큼 답을 얻을 수 있는 여러 멘토들을 만났습니다
          </div>
        </AnswerWrapper>
      </div>
      <div>
        <QustionWrpper>
          <Image src={questionLion} alt="질문라이언" width={67} height={60} />
          <div>Q. 멋쟁이사자처럼의 분위기는 어떤가요?</div>
        </QustionWrpper>
        <AnswerWrapper>
          <div className="keypoint">자유롭고 즐겁게 코딩할 수 있어요.</div>
          <div>
            놀땐 놀고 개발할 땐 개발하는 분위기입니다! 멋사는 모각코(모여서 각자
            코딩)를 자주 진행하는데 자유롭게 참여할 수 있어요. 혼자하면 지루할
            수 있는 개발공부를 함께 모여 즐겁게 했습니다.
          </div>
        </AnswerWrapper>
      </div>
      <div>
        <QustionWrpper>
          <Image src={questionLion} alt="질문라이언" width={67} height={60} />
          <div>
            Q. 멋사 친구들과 함께 했던, 가장 기억에 남는 추억은 무엇인가요?
          </div>
        </QustionWrpper>
        <AnswerWrapper>
          <div className="keypoint">아이디어톤과 해커톤 !</div>
          <div>
            개발하면서 밤을 지새웠던 아이디어톤과 해커톤이 가장 기억에 남아요!
            당시에는 좀 고생했지만 지나고보니 좋은 결과도 있었고, 팀원들과 더욱
            돈독해지는 계기가 되었던 것 같습니다.자 코딩)를 자주 진행하는데
            자유롭게 참여할 수 있어요. 혼자하면 지루할 수 있는 개발공부를 함께
            모여 즐겁게 했습니다.
          </div>
        </AnswerWrapper>
      </div>
      <div>
        <QustionWrpper>
          <Image src={questionLion} alt="질문라이언" width={67} height={60} />
          <div>
            Q. 많은 지원자들 가운데 현우님이 뽑힌 이유는 무엇이라 생각하시나요?
          </div>
        </QustionWrpper>
        <AnswerWrapper>
          <div className="keypoint">멋사의 키워드 &quot;협업&quot;</div>
          <div>
            면접을 합격하고 한참 뒤에 제 면접을 진행했던 운영진에게 저를 왜
            뽑았는지 물어봤어요. 돌아온 답변은 “협업을 잘할 것 같아서!”였습니다.
            개발실력도 중요하지만 팀원과의 소통 능력 또한 중요하게 생각한다는
            느낌을 받았고 이는 저도 동의하는 부분입니다. 협업을 잘할 것 같다는
            인상을 주는 게 개인적으로 멋사 면접에서 중요하다고 생각합니다.
          </div>
        </AnswerWrapper>
      </div>
      <div>
        <QustionWrpper>
          <Image src={questionLion} alt="질문라이언" width={67} height={60} />
          <div>
            Q. 마지막으로 멋쟁이 사자처럼 11기 친구들에게 한마디 해주세요
          </div>
        </QustionWrpper>
        <AnswerWrapper>
          <div className="keypoint">다들 멋사에서 만나요~!</div>
          <div>
            10기 멋사를 하면서 함께 고민할 수 있는 사람들을 많이 얻어가서 정말
            좋았습니다. 11기 여러분들도 멋사에서 저보다 더 많은 것들 얻어가시길
            응원하겠습니다!
          </div>
        </AnswerWrapper>
      </div>
    </>
  );
};

export default QNABox;

const QustionWrpper = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
  color: var(--BLUE-1, #1b00fd);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const AnswerWrapper = styled.div(() => [
  css`
    margin-left: 84px;
    display: flex;
    padding: 20px 24px;
    flex-direction: column;
    gap: 12px;
    border-radius: 24px;
    border: 1px solid var(--BLUE-1, #1b00fd);
    > div {
      font-size: 20px;
      font-weight: 400;
      line-height: 150%;
      color: var(--Gray, #646468);
      &.keypoint {
        font-size: 24px;
        font-weight: 700;
        line-height: normal;
        color: black;
      }
    }
  `,
]);
