import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import GlobalLayOut from "../components/GlobalLayOut/GlobalLayOut";

export default function About() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>난 어바웃</title>
      </Head>
      <div onClick={() => router.back()}>뒤로가기</div>;
    </>
  );
}
