import { useRouter } from "next/router";

export default function PartPage() {
  //React 컴포넌트와 훅은 항상 대문자로 시작해야 한다는 것을 기억해주세요.
  const router = useRouter();
  return <div>여기는 파트 {router.query.partintro} 페이지..</div>;
}
