import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function Dynamics() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>난 다이나믹 라우트</title>
      </Head>
      <div onClick={() => window.history.back()}>
        다이나믹 라우트 값 : {router.query.dynamic}
      </div>
    </>
  );
}

export default Dynamics;
