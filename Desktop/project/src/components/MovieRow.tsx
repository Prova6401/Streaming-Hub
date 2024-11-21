import React from 'react';
import { Play, Plus, ThumbsUp } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  image: string;
  videoId?: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
  onMovieClick: (movieId: number) => void;
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies, onMovieClick }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4 px-4">{title}</h2>
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex-none w-64 relative group cursor-pointer"
              onClick={() => onMovieClick(movie.id)}
            >
              <div className="relative h-36 w-full overflow-hidden rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center space-x-3">
                      <button 
                        className="bg-white rounded-full p-2 hover:bg-gray-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          onMovieClick(movie.id);
                        }}
                      >
                        <Play className="h-4 w-4 text-black" fill="black" />
                      </button>
                      <button 
                        className="border-2 border-gray-400 rounded-full p-2 hover:border-white"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Plus className="h-4 w-4 text-white" />
                      </button>
                      <button 
                        className="border-2 border-gray-400 rounded-full p-2 hover:border-white"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ThumbsUp className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="mt-2 text-sm text-white group-hover:text-gray-300">{movie.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;