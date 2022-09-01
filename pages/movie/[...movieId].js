import React from "react";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";
import { StarIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";

export default function MovieDetails({ details }) {
  const IMAGE_URL = "https://image.tmdb.org/t/p/original";

  const timeConvert = (min) => {
    let minutes = min % 60;
    let hours = (min - minutes) / 60;
    let output = hours + "h " + minutes + "m";
    return output;
  };
  return (
    <div>
      <Head>
        <title>{details.title || details.original_name}</title>
      </Head>
      <div
        className="bg-local bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGE_URL}${details.backdrop_path || details.poster_path})`, height: "550px" }}
      >
        <div className="bg-[#06202A] opacity-90 p-10 sm:px-20 sm:py-10 my-auto md:flex " style={{ height: "550px" }}>
          <div className="sm:mx-20" style={{ minWidth: "300px" }}>
            <Image
              className="rounded-lg"
              height={470}
              width={300}
              src={`${IMAGE_URL}${details.poster_path}`}
              alt="Poster"
            />
          </div>
          <div className="pt-9">
            <div className="text-3xl  truncate font-semibold">{details.title || details.original_name}</div>
            {details.tagline && <p>({details.tagline})</p>}
            <p className="text-sm mt-2">
              {details.release_date} <span className="text-2xl font-semibold"> . </span>{" "}
              {details.genres.map((gen) => {
                return <span key={gen.id}>| {gen.name} </span>;
              })}
            </p>
            <p className="mt-3 ">
              <span className="font-semibold text-lg">Duration :</span> {timeConvert(details.runtime)}
            </p>
            <p className="mt-3 font-semibold text-lg">Overview </p>
            <p className="mt-2 ">{details.overview}</p>
            <div className="flex flex-wrap mt-6">
              <p className="font-semibold text-lg flex">
                <StarIcon className="h-5 mr-2 mt-1" /> Rating :{" "}
              </p>{" "}
              <span className="mt-1 "> &nbsp;{details.vote_average} / 10</span>
              <p className="font-semibold text-lg flex ml-12">
                <HandThumbUpIcon className="h-5 mx-2 mt-1" /> Vote :{" "}
              </p>{" "}
              <span className="mt-1 "> &nbsp;{details.vote_count}</span>
            </div>
            <p className="mt-4 ">
              <span className="font-semibold text-lg">Status :</span> <span>{details.status}</span>
            </p>
            <p className="mt-4 ">
              <span className="font-semibold text-lg">Language :</span>{" "}
              {details.spoken_languages?.map((lang, i) => {
                return <span key={i}>{lang.name}, </span>;
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const movieId = context.query.movieId;
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
    return {
      props: { details: res.data },
    };
  } catch (err) {
    return {
      props: { details: {} },
    };
  }
}
