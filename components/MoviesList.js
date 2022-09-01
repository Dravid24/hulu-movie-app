import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const MoviesList = ({ movies }) => {
  const router = useRouter();
  const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="px-5 my-10 sm:grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl: flex flex-wrap justify-center">
      {movies.map((movie, i) => {
        return (
          <div key={i}>
            <div
              className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
              onClick={() => router.push(`/movie/${movie.id}`)}
            >
              <Image
                layout="responsive"
                height={1080}
                width={1920}
                src={`${IMAGE_URL}${movie.backdrop_path || movie.poster_path}`}
                alt="Poster"
              />
              <div className="p-2">
                <p className="truncate max-w-md">{movie.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                  {movie.title || movie.original_name}
                </h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                  {movie.release_date || movie.first_air_date}
                  <HandThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MoviesList;
