import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import LayOut from "../../components/LayOut";

function Test2() {
  const router = useRouter();
  console.log(router.query.id);
  return (
    <>
      <Head>
        <title>로컬 레이아웃</title>
      </Head>
      <LayOut>
        <div onClick={() => router.back()}>뒤로가기</div>
      </LayOut>
    </>
  );
}

export default Test2;
