"use client";

import { useRef, useState, useEffect } from "react";

export default function DentalDashboard() {
  const audioRefs = useRef({});
  const clickSoundRef = useRef(null);
  const [playingId, setPlayingId] = useState(null);

  const dentalCareList = [
    {
      id: 1,
      title: "Menjaga Kebersihan Mulut Sepanjang Hari",
      audioUrl: "/audio/menjaga-kebersihan-mulut-sepanjang-hari.m4a",
      icon: "😁",
    },
    {
      id: 2,
      title: "Perhatikan Kebiasaan Yang Dapat Merusak Gigi",
      audioUrl: "/audio/perhatikan-kebiasaan-yang-dapat-merusak-gigi.m4a",
      icon: "⚠️",
    },
    {
      id: 3,
      title: "Kebiasaan Menyikat Gigi Secara Teratur",
      audioUrl: "/audio/kebiasaan-menyikat-gigi-secara-teratur.m4a",
      icon: "🪥",
    },
    {
      id: 4,
      title: "Malam Hari Sebelum Tidur",
      audioUrl: "/audio/malam-hari-sebelum-tidur.m4a",
      icon: "🌙",
    },
    {
      id: 5,
      title: "Sebelum Mulai Menyikat Gigi",
      audioUrl: "/audio/sebelum-mulai-menyikat-gigi.m4a",
      icon: "⏱️",
    },
    {
      id: 6,
      title: "Cara Menyikat Gigi",
      audioUrl: "/audio/cara-menyikat-gigi.m4a",
      icon: "📘",
    },
    {
      id: 7,
      title: "Lidah Juga Perlu Dibersihkan",
      audioUrl: "/audio/lidah-juga-perlu-dibersihkan.m4a",
      icon: "👅",
    },
    {
      id: 8,
      title: "Pemeriksaan Rutin Ke Dokter Gigi",
      audioUrl: "/audio/pemeriksaan-rutin-ke-dokter-gigi.m4a",
      icon: "🦷",
    },
    {
      id: 9,
      title: "Kebiasaan Makan",
      audioUrl: "/audio/kebiasaan-makan.m4a",
      icon: "🍎",
    },
  ];

  const playHaptic = () => {
    if (navigator.vibrate) navigator.vibrate(40);
  };

  const playClickSound = () => {
    if (!clickSoundRef.current) return;
    clickSoundRef.current.currentTime = 0;
    clickSoundRef.current.play().catch(() => {});
  };

  const handleCardClick = (id) => {
    const current = audioRefs.current[id];
    if (!current) return;

    // stop semua audio lain
    Object.entries(audioRefs.current).forEach(([key, audio]) => {
      if (Number(key) !== id && audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    if (playingId === id) {
      current.pause();
      setPlayingId(null);
    } else {
      playHaptic();
      playClickSound();
      current.play();
      setPlayingId(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-emerald-600">
      {/* click sound */}
      <audio ref={clickSoundRef} src="/audio/click.wav" preload="auto" />

      {/* HEADER */}
      <header className="bg-gradient-to-r from-green-500 to-green-600 shadow-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-4">
          <div className="bg-white rounded-2xl p-3 shadow-lg">
            <span className="text-4xl">😁</span>
          </div>
          <div>
            <h1 className="text-3xl font-black text-white">Dentihear</h1>
            <p className="text-green-100 text-sm">
              Panduan audio perawatan gigi untuk anak tunanetra
            </p>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* BANNER – TETAP ADA */}
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-green-300 rounded-3xl shadow-2xl p-8 mb-10 flex justify-between items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              🎧 Selamat datang di, Dentihear
            </h2>
            <p className="text-gray-700 mt-1">
              Ayo! Dengarkan panduan audio lengkap untuk kesehatan gigi optimal
            </p>
          </div>
          <div className="hidden md:block text-7xl">🦷</div>
        </div>

        {/* GRID CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dentalCareList.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              aria-pressed={playingId === item.id}
              onClick={() => handleCardClick(item.id)}
              onKeyDown={(e) => e.key === "Enter" && handleCardClick(item.id)}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-all
                ${playingId === item.id ? "ring-4 ring-green-300 scale-[1.02]" : "hover:scale-[1.02]"}`}
            >
              {/* HEADER CARD */}
              <div className="bg-gradient-to-r from-green-400 to-green-500 p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <span className="bg-yellow-300 px-3 py-1 rounded-full text-xs font-bold">
                    #{item.id}
                  </span>
                </div>
              </div>

              {/* BODY */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-800">
                  {item.title}
                </h3>

                {/* AUDIO BAR (TETAP ADA) */}
                <div
                  className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl p-4 border border-green-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <audio
                    ref={(el) => (audioRefs.current[item.id] = el)}
                    src={item.audioUrl}
                    controls
                    className="w-full"
                    controlsList="nodownload"
                    onPlay={() => setPlayingId(item.id)}
                    onPause={() => setPlayingId(null)}
                  />
                  <p className="mt-2 text-sm text-green-700 text-center">
                    Klik di kartu untuk memutar / menghentikan audio
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-green-600 to-green-700 mt-16 py-8 text-center text-green-100 text-sm">
        © 2025 Dentihear · Universitas Jember – Fakultas Kedokteran Gigi
      </footer>
    </div>
  );
}
