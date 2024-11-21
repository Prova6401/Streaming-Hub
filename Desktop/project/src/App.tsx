import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import MoviePlayer from './components/MoviePlayer';

const budSpencerMovies = [
  {
    id: 1,
    title: "Continuavano a chiamarlo Trinità",
    image: "https://it.wikipedia.org/wiki/...continuavano_a_chiamarlo_Trinit%C3%A0#/media/File:Continuavano_a_chiamarlo_Trinit%C3%A0.png",
    videoId: "1xh33DdyBMs"
  },
  {
    id: 2,
    title: "Nati con la camicia",
    image: "https://images.unsplash.com/photo-1517666005606-40d29b8666c3?w=800&h=450&fit=crop",
    videoId: "g7RzSPZlQLI"
  },
  {
    id: 3,
    title: "Io sto con gli ippopotami",
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&h=450&fit=crop",
    videoId: "dzlq9Uk8cbs"
  },
  {
    id: 4,
    title: "...Altrimenti ci arrabbiamo!",
    image: "https://images.unsplash.com/photo-1533167649158-6d508895b680?w=800&h=450&fit=crop",
    videoId: "6e_aN1UDNwA"
  },
  {
    id: 5,
    title: "...tramite amicizia",
    image: "https://images.unsplash.com/photo-1517666005606-40d29b8666c3?w=800&h=450&fit=crop",
    videoId: "LDOqurF5yrA"
  },
  {
    id: 6,
    title: "BATMAN: ARKHAM KNIGHT",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=800&h=450&fit=crop",
    videoId: "fPuDpsQ4IPM"
  },
  {
    id: 7,
    title: "7 Chili in 7 Giorni",
    image: "https://upload.wikimedia.org/wikipedia/it/1/1b/7_chili_in_7_giorni.png",
    videoId: "svYXTY7nUDY"
  },
  {
    id: 8,
    title: "Era Glaciale 4",
    image: "https://upload.wikimedia.org/wikipedia/it/1/1e/Ice_Age_4_-_Continental_Drift.png",
    videoId: "M5lrhq4Y3Ro"
  }
];

const popularMovies = [
  {
    id: 7,
    title: "Blade Runner 2049",
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=800&h=450&fit=crop"
  },
  {
    id: 8,
    title: "Arrival",
    image: "https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?w=800&h=450&fit=crop"
  },
  {
    id: 9,
    title: "Mad Max",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=450&fit=crop"
  },
  {
    id: 10,
    title: "Ex Machina",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&fit=crop"
  }
];

function App() {
  const [selectedMovie, setSelectedMovie] = React.useState<{id: number, videoId: string} | null>(null);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {selectedMovie ? (
        <MoviePlayer 
          videoId={selectedMovie.videoId} 
          onBack={() => setSelectedMovie(null)}
          movie={budSpencerMovies.find(m => m.id === selectedMovie.id)}
        />
      ) : (
        <>
          <Hero />
          <div className="relative z-10 -mt-32 pb-8">
            <MovieRow 
              title="Bud Spencer & Terence Hill" 
              movies={budSpencerMovies} 
              onMovieClick={(movieId) => {
                const movie = budSpencerMovies.find(m => m.id === movieId);
                if (movie?.videoId) {
                  setSelectedMovie({ id: movieId, videoId: movie.videoId });
                }
              }}
            />
            <MovieRow 
              title="Altri Film Popolari" 
              movies={popularMovies} 
              onMovieClick={() => {}}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;