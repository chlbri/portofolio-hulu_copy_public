import { FC } from "react";
import FlipMove from "react-flip-move";
import Movie from "../../lib/Movie";
import ItemResult from "./Item";

type Props = { movies: Movie[] | undefined };
const Movies: FC<Props> = ({ movies }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6 justify-center">
      {movies !== undefined &&
        movies.map((movie) => (
          // eslint-disable-next-line react/jsx-key
          <ItemResult key={movie.id} result={movie} />
        ))}
    </FlipMove>
  );
};

export default Movies;