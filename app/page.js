"use client";
import { useState } from 'react';
import Image from "next/image";


// SVG Icon Components with more color
const ToothIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.5 8a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5V8z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M10 4a6 6 0 100 12 6 6 0 000-12zm0 1a5 5 0 100 10 5 5 0 000-10z" clipRule="evenodd" fill="white" />
  </svg>
);


const HeroTooth = () => (
    <svg width="120" height="120" viewBox="0 0 159 159" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="79.5" cy="79.5" r="79.5" fill="url(#paint0_linear_1_2)"/>
        <path d="M49.9999 41.5C49.9999 41.5 52.9999 33.5 61.4999 33.5C69.9999 33.5 75.4999 40 75.4999 47C75.4999 54 68.9999 60 61.4999 60C53.9999 60 49.9999 53 49.9999 47C49.9999 41.5 49.9999 41.5 49.9999 41.5Z" fill="white"/>
        <path d="M83.5 41.5C83.5 41.5 86.5 33.5 95 33.5C103.5 33.5 109 40 109 47C109 54 102.5 60 95 60C87.5 60 83.5 53 83.5 47C83.5 41.5 83.5 41.5 83.5 41.5Z" fill="white"/>
        <path d="M49 70C49 70 43 80 50 86C57 92 63.5 83 63.5 75L49 70Z" fill="white"/>
        <path d="M109 70C109 70 115 80 108 86C101 92 94.5 83 94.5 75L109 70Z" fill="white"/>
        <path d="M68 91C68 91 63 103 72.5 108C82 113 85 101 85 101L68 91Z" fill="white"/>
        <path d="M91 91C91 91 96 103 86.5 108C77 113 74 101 74 101L91 91Z" fill="white"/>
        <defs>
        <linearGradient id="paint0_linear_1_2" x1="79.5" y1="0" x2="79.5" y2="159" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2DD4BF"/>
        <stop offset="1" stopColor="#14B8A6"/>
        </linearGradient>
        </defs>
    </svg>
);


export default function DentalDashboard() {
  const [playingId, setPlayingId] = useState(null);

  const dentalCareList = [
    { id: 1, title: "Menjaga Kebersihan Mulut Sepanjang Hari", audioUrl: "/audio/sikat-gigi.mp3", icon: "😁" },
    { id: 2, title: "Perhatikan Kebiasaan Yang Dapat Merusak Gigi", audioUrl: "/audio/sikat-gigi.mp3", icon: "⚠️" },
    { id: 3, title: "Kebiasaan Menyikat Gigi Secara Teratur", audioUrl: "/audio/sikat-gigi.mp3", icon: "🪥"  },
    { id: 4, title: "Malam Hari Sebelum Tidur", audioUrl: "/audio/sikat-gigi.mp3", icon: "🌙" },
    { id: 5, title: "Sebelum Mulai Menyikat Gigi", audioUrl: "/audio/sikat-gigi.mp3", icon: "⏱️"  },
    { id: 6, title: "Cara Menyikat Gigi", audioUrl: "/audio/sikat-gigi.mp3", icon: "📘"  },
    { id: 7, title: "Lidah Juga Perlu Dibersihkan", audioUrl: "/audio/sikat-gigi.mp3", icon: "👅" },
    { id: 8, title: "Pemeriksaan Rutin Ke Dokter Gigi", audioUrl: "/audio/sikat-gigi.mp3", icon: "🦷"  },
    { id: 9, title: "Kebiasaan Makan", audioUrl: "/audio/sikat-gigi.mp3", icon: "🍎" },
  ];

  const handlePlay = (id) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-teal-50 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-teal-400 to-green-500 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-2xl p-3 shadow-lg transform hover:scale-110 transition-all duration-300">
                <Image
                  src="/dentist.png"
                  alt="Ikon kebersihan gigi"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">
                  Dentihear
                </h1>
                <p className="text-white text-opacity-90 text-sm sm:text-base">
                  Panduan Perawatan Gigi Anak Tunanetra
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-br from-teal-100 to-green-200 rounded-3xl shadow-xl p-8 mb-8 sm:mb-12 flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-teal-800 mb-2">
              Panduan Perawatan Gigi Dan Mulut Sehari-Hari Anak Tunanetra
            </h2>
            <p className="text-teal-700 text-base sm:text-lg">
              Ayo dengarkan panduan agar gigimu sehat dan kuat!
            </p>
          </div>
          <div className="hidden sm:block animate-bounce">
            <HeroTooth />
          </div>
        </div>

        {/* Care List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {dentalCareList.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              style={{ animation: `fadeInUp 0.5s ${index * 0.1}s both` }}
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 flex-1">
                    {item.title}
                  </h3>
                </div>

                {/* Audio Player */}
                <div className="rounded-lg bg-gray-50 p-2">
                  <audio
                    id={`audio-${item.id}`}
                    src={item.audioUrl}
                    className="w-full"
                    controls
                    controlsList="nodownload"
                    onPlay={() => handlePlay(item.id)}
                    onPause={() => setPlayingId(null)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-500">
            <p>
              © 2025 Dentihear. Dibuat dengan ❤️ untuk senyum sehat.
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
