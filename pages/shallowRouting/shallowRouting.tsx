import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

let counter = 0;
// 아래 함수명으로 익스포트하면 아래 함수기 리턴하는 props의 값을 페이지 컴포넌트에서 사용할수있다.
// 최초 로드시에 생성된다.

export async function getServerSideProps() {
  counter++;
  return { props: { initialPropsCounter: counter } };
}

interface ShallowRouting {
  initialPropsCounter: number;
}

function ShalowRouting({ initialPropsCounter }: ShallowRouting) {
  const [number, setNumber] = useState(0);
  const router = useRouter();
  const { pathname, query } = router;

  const reload = () => {
    // 아래를 실행하면 서버사이드 프랍이 변경되어 리로드의 횟수를 알수있다.
    router.push(
      `${pathname}${query.counter ? `/?counter=${query.counter}` : ""}`
    );

    // router.reload();
  };
  const increaseNumber = () => {
    setNumber((prev) => prev + 1);
  };
  const incrementCounter = () => {
    const currentCounter = query.counter
      ? parseInt(query.counter as string)
      : 0;
    const href = `${pathname}/?counter=${currentCounter + 1}`;
    // 스왈로우 라우팅을 실행하면 바뀔 값만 채크하면 화면을 바꿔치기한다.(히스토리는 남는다) 리로드는 되지않는다.
    // 스왈로우 라이팅을 실행하지 않을경우 그냥 리로드가 된다.
    router.push(href, href, { shallow: true });
  };
  return (
    <>
      <Head>
        <title>스왈로우!</title>
      </Head>
      <button onClick={reload}>reload</button>
      <div>reload{initialPropsCounter}</div>
      <button onClick={incrementCounter}>increaseCounter </button>
      <div>counter {query.counter ? query.counter : 0}</div>
      <button onClick={increaseNumber}>increaseState</button>
      <div>{number}</div>
    </>
  );
}

export default ShalowRouting;
