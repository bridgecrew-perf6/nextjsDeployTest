import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function Dynamics() {
  const router = useRouter();
  const getDataHandler = async () => {
    const getData = await axios.get("/api/hello", {
      params: {
        getParam: "hi",
      },
    });
    console.log(getData.data);
  };
  const postDataHandler = async () => {
    const getData = await axios.post("/api/hello", {
      postBody: "hi",
    });
    console.log(getData.data);
  };
  const dynamicApi = async () => {
    const getData = await axios.get("/api/hidynamic");
    console.log(getData.data);
  };
  return (
    <>
      <Head>
        <title>난 다이나믹 라우트</title>
      </Head>
      <div onClick={getDataHandler}>get api 받아보기</div>
      <div onClick={postDataHandler}>post api 받아보기</div>
      <div onClick={dynamicApi}>다이나믹 받아보기</div>
      <div onClick={() => window.history.back()}>
        다이나믹 라우트 값 : {router.query.dynamic}
      </div>
    </>
  );
}

export default Dynamics;
