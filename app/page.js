"use client";

import { useState } from 'react';

export default function DentalDashboard() {
  const [playingId, setPlayingId] = useState(null);

  const dentalCareList = [
    {
      id: 1,
      title: "Tutorial sikat gigi",
      audioUrl: "/audio/sikat-gig.mp3",
      icon: "🪥"
    },
    {
      id: 2,
      title: "Teknik Flossing untuk Gigi Sehat",
      audioUrl: "/audio/flossing.mp3",
      icon: "🦷"
    },
    {
      id: 3,
      title: "Pentingnya Berkumur dengan Mouthwash",
      audioUrl: "/audio/mouthwash.mp3",
      icon: "💧"
    },
    {
      id: 4,
      title: "Cara Merawat Gigi Sensitif",
      audioUrl: "/audio/gigi-sensitif.mp3",
      icon: "❄️"
    },
    {
      id: 5,
      title: "Tips Mencegah Gigi Berlubang",
      audioUrl: "/audio/cegah-lubang.mp3",
      icon: "🛡️"
    },
    {
      id: 6,
      title: "Perawatan Gigi untuk Pengguna Behel",
      audioUrl: "/audio/perawatan-behel.mp3",
      icon: "😬"
    },
    {
      id: 7,
      title: "Cara Mengatasi Bau Mulut",
      audioUrl: "/audio/bau-mulut.mp3",
      icon: "🌿"
    },
    {
      id: 8,
      title: "Makanan yang Baik untuk Kesehatan Gigi",
      audioUrl: "/audio/makanan-sehat.mp3",
      icon: "🥗"
    },
    {
      id: 9,
      title: "Kapan Harus ke Dokter Gigi",
      audioUrl: "/audio/ke-dokter.mp3",
      icon: "👨‍⚕️"
    },
    {
      id: 10,
      title: "Perawatan Gigi Anak-Anak",
      audioUrl: "/audio/gigi-anak.mp3",
      icon: "👶"
    }
  ];

  const handlePlay = (id) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-emerald-600">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-500 to-green-600 shadow-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-2xl p-3 shadow-lg transform hover:scale-110 transition-all duration-300">
                <span className="text-4xl">😁</span>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-white drop-shadow-lg">
                  Dentihear
                </h1>
                <p className="text-green-100 text-sm md:text-base font-medium">
                  Panduan Perawatan Gigi Anak Berkebutuhan Khusus 
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3">
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-green-300 rounded-3xl shadow-2xl p-8 mb-8 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                🎧 Selamat datang di, Dentihear
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
                Dengarkan panduan audio lengkap untuk kesehatan gigi optimal
              </p>
            </div>
            <div className="hidden md:block text-7xl animate-bounce">
              🦷
            </div>
          </div>
        </div>

        {/* Care List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {dentalCareList.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 animate-fadeInUp"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-green-400 to-green-500 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <span className="bg-yellow-300 text-green-800 text-xs font-black px-3 py-1.5 rounded-full shadow">
                      #{item.id}
                    </span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                  {item.title}
                </h3>

                {/* Audio Player */}
                <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl p-4 border-2 border-green-200 shadow-inner">
                  <div className="flex items-center gap-3 mb-3">

                    <div className="flex-1">
                      <audio
                        id={`audio-${item.id}`}
                        src={item.audioUrl}
                        className="w-full h-10"
                        controls
                        controlsList="nodownload"
                        onPlay={() => setPlayingId(item.id)}
                        onPause={() => setPlayingId(null)}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-green-700">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
                    </svg>
                    <p className="text-sm font-semibold">
                      Klik play untuk mendengarkan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-600 to-green-700 mt-12 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 place-items-center">
            <div className="text-center md:text-left">
              <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2 justify-center md:justify-start">
                <span className="text-2xl">🦷</span> Tentang
              </h3>
              <p className="text-green-100 text-sm leading-relaxed max-w-sm">
                Platform edukasi perawatan gigi untuk anak berkebutuhan khusus
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2 justify-center md:justify-start">
                <span className="text-2xl">📧</span> Kontak
              </h3>
              <div className="space-y-2 text-green-100 text-sm">
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <span>📞</span> 0878-8938-2335
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <span>✉️</span> info@dentihear.edu
                </p>
              </div>
            </div>

          </div>

          <div className="border-t border-green-500 pt-6 text-center">
            <p className="text-green-100 text-sm">
              © 2025 Dentihear. Universitas Jember - Fakultas Kedokteran Gigi
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}