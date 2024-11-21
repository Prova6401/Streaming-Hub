import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface MoviePlayerProps {
  videoId: string;
  onBack: () => void;
  movie?: {
    title: string;
    image: string;
  };
}

export default function MoviePlayer({ videoId, onBack, movie }: MoviePlayerProps) {
  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={onBack}
          className="flex items-center text-white mb-6 hover:text-gray-300"
        >
          <ArrowLeft className="h-6 w-6 mr-2" />
          Torna indietro
        </button>
        
        <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-xl">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={movie?.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            {movie?.title}
          </h1>
          <p className="text-gray-300 max-w-3xl">
            Un classico film con Bud Spencer e Terence Hill, una combinazione perfetta 
            di commedia, azione e avventura che ha fatto la storia del cinema italiano. 
            Questi film hanno conquistato il pubblico di tutto il mondo con il loro 
            umorismo unico e le memorabili scene di combattimento.
          </p>
        </div>
      </div>
    </div>
  );
}