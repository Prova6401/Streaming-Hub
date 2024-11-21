import React, { useState } from 'react';
import { Play, Info, X } from 'lucide-react';

const films = [
  {
    id: 1,
    title: "7 Chili in 7 Giorni",
    image: "https://upload.wikimedia.org/wikipedia/it/1/1b/7_chili_in_7_giorni.png",
    videoUrl: "https://www.youtube.com/embed/svYXTY7nUDY", // Usa l'embed URL per il video
    youtubeUrl: "https://www.youtube.com/watch?v=svYXTY7nUDY", // Link YouTube
  },
  {
    id: 2,
    title: "Continuavano a chiamarlo Trinità",
    image: "https://it.wikipedia.org/wiki/...continuavano_a_chiamarlo_Trinit%C3%A0#/media/File:Continuavano_a_chiamarlo_Trinit%C3%A0.png",
    videoUrl: "https://www.youtube.com/embed/1xh33DdyBMs",
    youtubeUrl: "https://www.youtube.com/watch?v=1xh33DdyBMs", // Link YouTube
  },
  // Puoi aggiungere altri film qui
];

export default function Hero() {
  const [currentFilmIndex, setCurrentFilmIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const film = films[currentFilmIndex];

  const playVideo = () => {
    setIsVideoPlaying(true); // Mostra il video quando si clicca "Riproduci"
  };

  const nextFilm = () => {
    setCurrentFilmIndex((prevIndex) => (prevIndex + 1) % films.length);
    setIsVideoPlaying(false); // Nasconde il video e lo resetta quando si cambia film
  };

  const closePlayer = () => {
    setIsVideoPlaying(false); // Chiudi il player e torna alla vista iniziale
  };

  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <img
          src={film.image}
          alt="Film background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 lg:mx-16">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            {film.title}
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            Descrizione del film...
          </p>

          {/* Se il video non sta riproducendo, mostra il tasto "Riproduci" */}
          {!isVideoPlaying && (
            <div className="flex space-x-4 mb-8">
              <button
                onClick={playVideo}
                className="flex items-center px-6 py-2 bg-white text-black rounded hover:bg-gray-300 transition-colors"
              >
                <Play className="h-5 w-5 mr-2" fill="black" />
                Riproduci
              </button>
              <button
                onClick={nextFilm}
                className="flex items-center px-6 py-2 bg-gray-500/70 text-white rounded hover:bg-gray-500/90 transition-colors"
              >
                <Info className="h-5 w-5 mr-2" />
                Altre info
              </button>
            </div>
          )}

          {/* Se il video è in riproduzione, mostra il player */}
          {isVideoPlaying && (
            <div className="relative w-full h-0 pb-[56.25%] mb-8">
              <iframe
                title={film.title}
                width="100%"
                height="100%"
                src={film.videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0"
              />
              {/* Tasto per chiudere il player */}
              <button
                onClick={closePlayer}
                className="absolute top-4 right-4 p-2 bg-black text-white rounded-full hover:bg-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          )}

          {/* Tasto "Altre info" che porta al link YouTube */}
          {!isVideoPlaying && (
            <div>
              <button
                onClick={() => window.open(film.youtubeUrl, '_blank')}
                className="flex items-center px-6 py-2 bg-gray-500/70 text-white rounded hover:bg-gray-500/90 transition-colors"
              >
                <Info className="h-5 w-5 mr-2" />
                Altre info
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
