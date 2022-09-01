import React, { useEffect } from "react";
import Router from "next/router";
import axios from "axios";
import Head from "next/head";
import requests from "../common/requests";
import MoviesList from "../components/MoviesList";
import Title from "../components/Title";

export default function Home({ result }) {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname === "/") {
      Router.push("/?genre=fetchTrending");
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Hulu</title>
      </Head>
      <Title />
      <MoviesList movies={result} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3${requests[genre].url}`
    );
    return {
      props: { result: res.data.results },
    };
  } catch (err) {
    return {
      props: { result: [] },
    };
  }
}
