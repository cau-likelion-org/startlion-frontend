import Link from "next/link";

export interface FAQObject {
  question: string;
  answer: JSX.Element;
}

export const ApplyFAQ = [
  {
    question: "Q. 재학생만 지원이 가능한가요?",
    answer: (
      <>
        1~4학년 재적생이라면 모두 지원 가능합니다.
        <p style={{ color: "red" }}>
          중앙대학교 학부 신입생/재학생/휴학생/자대 편입생/졸업유예생
          가능(졸업생, 타대생 불가)
        </p>
      </>
    ),
  },
  {
    question: "Q. 개인 포트폴리오는 링크로만 제출 가능한가요?",
    answer: (
      <>
        네, 링크로만 첨부할 수 있습니다. 파일일 경우, 구글 드라이브에 업로드한
        후 해당 파일 링크를 첨부하시면 됩니다.
      </>
    ),
  },
  {
    question: "Q. 면접 날짜와 시간은 선택 가능한가요?",
    answer: (
      <>
        지원서에 면접 가능한 시간을 모두 체크해주시면 운영진이 조율 후 문자로
        공지해드립니다.
      </>
    ),
  },
  {
    question: "Q. 관련 경험이 많이 없어도 괜찮은가요?",
    answer: (
      <>
        창업 및 개발에 대한 관심과 열정, 배우고자 하는 의지만 있다면 누구든
        가능합니다!
        <br />
        함께 성장하고 나아가기를 희망하는 모든 분을 기다리고 있으니 많은 관심과
        지원 부탁드립니다 🦁
      </>
    ),
  },
  {
    question: "Q. 구체적으로 무엇을 하는 곳인가요?",
    answer: (
      <>
        모든 파트가 참여하는 1년 일정은{" "}
        <Link href="/" style={{ fontWeight: "bold" }}>
          랜딩페이지
        </Link>
        에서 확인할 수 있으며, 파트별 구체적 일정은{" "}
        <Link href="/part/PM" style={{ fontWeight: "bold" }}>
          기획
        </Link>
        ,{" "}
        <Link href="/part/DE" style={{ fontWeight: "bold" }}>
          디자인
        </Link>
        ,{" "}
        <Link href="/part/FE" style={{ fontWeight: "bold" }}>
          프론트엔드
        </Link>
        ,{" "}
        <Link href="/part/BE" style={{ fontWeight: "bold" }}>
          백엔드
        </Link>
        에서 확인 가능합니다.
      </>
    ),
  },
];

export const ActivityFAQ = [
  {
    question: "Q. OT는 꼭 참여해야 하나요?",
    answer: (
      <>
        OT는 첫 세션일(수요일 오후 7시)에 대면으로 진행되며, 아기사자와 운영진이
        처음 만나는 자리이기 때문에 반드시 참석하시는 것을 권장합니다.
      </>
    ),
  },
  {
    question: "Q. 세션은 언제, 어떻게 진행되나요?",
    answer: (
      <>
        세션은 매주 수요일 오후 7시-10시에 중앙대학교 서울캠 강의실에서 대면으로
        진행됩니다.
      </>
    ),
  },
  {
    question: "Q. 관련 교육이 따로 진행되나요?",
    answer: (
      <>
        파트별로 커리큘럼에 따라 세션을 진행합니다. 자세한 내용은 파트별
        페이지에서 확인하실 수 있습니다.
      </>
    ),
  },
  {
    question: "Q. 회비나 준비물이 있나요?",
    answer: (
      <>
        연 3만원의 회비가 있으며 동아리 내 회비 사용 계획과 내역을 공지하고
        있습니다.
        <br />
        또한
        <span style={{ color: "red" }}>
          {" "}
          IT 개발 및 창업 동아리이기에 노트북이 반드시 필요합니다.
        </span>
      </>
    ),
  },
  {
    question: "Q. 인턴과 병행할 수 있나요?",
    answer: (
      <>
        인턴과 병행할 수 있으나 세션을 비롯한 아이디어톤, 해커톤 등의 공식 일정
        참여에 지장이 없어야 합니다.
      </>
    ),
  },
  {
    question: "Q. 활동 기간이 어떻게 되나요?",
    answer: (
      <>
        활동 기간은 3월~12월입니다. 2학기 연속 활동하셔야 수료하실 수 있습니다.
        <br />
        또한 아기사자로 1년 활동 및 수료 후 다음 기수 운영진으로 활동
        가능합니다.
      </>
    ),
  },
];
