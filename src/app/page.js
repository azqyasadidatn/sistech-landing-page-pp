"use client";
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  const [activeCategory, setActiveCategory] = useState("kopi");

  // 2. DATA DAFTAR MENU LENGKAP KAFE 
  const menuData = {
    kopi: [
      { name: "Espresso", price: "Rp 22.000", desc: "Double shot espresso murni pilihan. Pas untuk memicu konsentrasi penuh saat nugas.", icon: "☕", tag: "Must Try" },
      { name: "Kopi Susu", price: "Rp 25.000", desc: "Espresso lembut berpadu susu segar dan racikan manis gula aren rahasia.", icon: "🥛", tag: "Signature" },
      { name: "Latte", price: "Rp 24.000", desc: "Seduhan kopi susu dengan foam tebal yang lembut, senikmat membaca bab novel favorit.", icon: "🎨", tag: "Popular" },
      { name: "Cappuccino", price: "Rp 24.000", desc: "Kopi espresso dengan susu dan foam yang lembut, cocok untuk menikmati pagi yang cerah.", icon: "☕", tag: "Popular" }
    ],
    manis: [
      { name: "Croissant Senja", price: "Rp 18.000", desc: "Pastry renyah mentega premium dengan isian cokelat lumer yang memanjakan lidah.", icon: "🥐", tag: "Best Pairing" },
      { name: "Brownies", price: "Rp 20.000", desc: "Brownies cokelat padat kaya rasa bertabur kacang almond gurih.", icon: "🍫", tag: "Popular" },
      { name: "Croffle", price: "Rp 22.000", desc: "Croffle hangat bertekstur garing di luar, lembut di dalam dengan siraman sirup maple.", icon: "🧇", tag: "New" },
      { name: "Donat", price: "Rp 7.000", desc: "Donat lembut dengan isian manis dan taburan gula.", icon: "🍩", tag: "Special" }
    ],
    asin: [
      { name: "Kentang Goreng", price: "Rp 10.000", desc: "Kentang goreng potongan tebal yang gurih bertabur bumbu rumput laut alami.", icon: "🍟" },
      { name: "Platter Special", price: "Rp 28.000", desc: "Kombinasi sosis, nugget, dan onion rings jumbo untuk dinikmati bersama tim kerja.", icon: "🍿", tag: "Share" }
    ],
    berat: [
      { name: "Nasi Goreng", price: "Rp 32.000", desc: "Nasi goreng bumbu rempah legendaris dengan topping telur mata sapi dan ayam suwir.", icon: "🍳", tag: "Chef Recommendation" },
      { name: "Mie Dokar", price: "Rp 18.000", desc: "Mie kuah kental pedas gurih level tinggi yang siap membakar semangat ngodingmu.", icon: "🍜" }
    ]
  };
  return (
    <main className="flex min-h-screen flex-col bg-white">

    <nav className="w-full bg-white border-b border-stone-200 px-6 py-6 flex justify-between items-center sticky top-0 z-50">
      <span className="font-serif font-bold text-main-expreso text-lg">Sistech Caffe</span>
      <ul className="flex space-x-6 text-m font-medium text-stone-600 mr-[3%]">
        <li><Link href="/#menu" className="hover:text-amber-900 transition">Menu</Link></li>
        <li><Link href="/#about" className="hover:text-amber-900 transition">About Us</Link></li>
        <li><Link href="/#promo" className="hover:text-amber-900 transition">Promo</Link></li>
        <li><Link href="/#login" className="hover:text-amber-900 transition p-[18%] pl-[40%] pr-[40%] rounded-[10%] border-none bg-main-expreso-p4 text-white">Login</Link></li>
      </ul>
    </nav>

    <div className="Content-Container mx-auto m-[1%] mt-[4%] flex-1">
      <section className="first mx-auto">
        <span className="text-xl font-bold text-center text-main-expreso-b2 block mb-2">
          Di sini, setiap cangkir punya cerita, dan setiap sudut tahu mimpimu
        </span>
        <section className="flex justify-content image-first grid grid-cols-3 items-center m-[3%] mt-[8%] gap-4">
          <div className="card relative rounded-2xl object-cover shadow-lg h-64 md:h-80 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop" 
                alt="Sudut Ngopi Tenang" 
                className="h-full w-full rounded-2xl"
                />
                <div className="teks absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent rounded-2xl">
                  <span className="absolute bottom-[25%] left-4 text-lg sm:text-2xl md:text-3xl md:text-3xl font-bold text-second-orange-p4">
                    Best Menu
                  </span>
                  <p className="absolute bottom-[15%] left-0 text-[9px] sm:text-xs md:text-sm uppercase tracking-widest text-white font-bold pl-4">
                    Koleksi Kopi Eksklusif
                  </p>
                </div>
          </div>
        
          <div className="card relative rounded-2xl object-cover shadow-lg h-64 md:h-80 w-full overflow-hidden">
              <img
                src= "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=600&auto=format&fit=crop" 
                alt="Sudut Ngopi Tenang" 
                className="h-full w-full rounded-2xl"
                />
                <div className="teks absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent rounded-2xl">
                  <span className="absolute bottom-[25%] left-4 text-lg sm:text-2xl md:text-3xl font-bold text-second-orange-p4">
                    Eksklusif
                  </span>
                  <p className="absolute bottom-[15%] left-0 text-[9px] sm:text-xs md:text-sm uppercase tracking-widest text-white font-bold pl-4 mt-1">
                    Koleksi Novel dan Komik
                  </p>
                </div>
          </div>

          <div className="card relative rounded-2xl object-cover shadow-lg h-64 md:h-80 w-full overflow-hidden">
              <img
                src= "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=600&auto=format&fit=crop" 
                alt="Sudut Ngopi Tenang" 
                className="h-full w-full rounded-2xl"
                />
                <div className="teks absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent rounded-2xl">
                  <span className="absolute bottom-[25%] left-4 text-lg sm:text-2xl md:text-3xl font-bold text-second-orange-p4">
                    Free Wi-Fi
                  </span>
                  <p className="absolute bottom-[15%] left-0 text-[9px] sm:text-xs md:text-sm uppercase tracking-widest text-white font-bold pl-4 mt-1">
                    Jaringan Cepat 24 Jam
                  </p>
                </div>
          </div>
          </section>
      </section>

      <section className="relative third mt-[11%] grid grid-cols-2">
        <div className="image image-first flex flex-col justify-center items-start gap-4 m-[3%] mt-[10%]"> 
          <img 
          src="https://images.unsplash.com/photo-1586253181808-c030e7e1aa5e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Font of the caffe"
          className="rounded-2xl object-cover shadow-lg h-full w-full ml-[5%]"
          >
          </img>
          <div className="absolute w-[45%] inset-0 bg-main-expreso-p4/20 border-2 border-main-expreso-p2/30 rounded-2xl -translate-x-4 -translate-y-4 z-0  m-[3%]"></div>
        </div>
        <div id="about" className="flex flex-col justify-content mt-[7%] p-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-teals-b2">
              About Us
            </span>
            <h2 className="text-3xl font-serif font-bold text-main-expreso-b4">
              Tempat Cerita & Kafein Bertemu
            </h2>
            <p className="text-main-expreso-p2 text-sm leading-relaxed"> 
              Sistech Caffe hadir sebagai sebuah ruang bagi para pencari inspirasi, mahasiswa, pembaca buku, hingga kreator digital. 
              Kami memadukan harmoni antara seduhan kopi pilihan yang merangsang fokus, 
              ketenangan sudut literasi dengan jajaran buku yang menenangkan lelah, serta 
              produktivitas ruang kerja modern yang dilengkapi Wi-Fi cepat dan fasilitas 
              penunjang kreativitasmu.
              </p>
        </div>
      </section>
      <section className="third mt-[10%]">
        <span className="text-2xl font-bold text-center text-main-expreso-b2 block mb-2">
          Our Best Choice
        </span>
        <section className="py-16 px-6 max-w-6xl mx-auto w-full border-t border-main-expreso-p4/10 mt-[2%]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start text-center">
            <div className="flex flex-col items-center space-y-4 px-2">
              
              <h3 className="font-serif font-bold text-main-expreso-b4 text-base tracking-wider uppercase">
                Sertifikasi Halal
              </h3>
              <p className="text-main-expreso-p2 text-xs md:text-sm leading-relaxed max-w-xs">
                Sebagai ruang komunal tepercaya, Sistech Caffe memperkuat komitmen untuk selalu menyajikan produk berkualitas tinggi yang aman dan menenangkan dengan memastikan seluruh bahan baku telah mendapatkan Sertifikasi Halal resmi.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 px-2">
              <h3 className="font-serif font-bold text-main-expreso-b4 text-base tracking-wider uppercase">
                Ruang Komunal Terbaik 2026
              </h3>
              <p className="text-main-expreso-p2 text-xs md:text-sm leading-relaxed max-w-xs">
                Sistech Caffe telah tumbuh menjadi salah satu penyedia ruang kerja digital dan sudut literasi paling inspiratif, menghadirkan ekosistem yang seimbang untuk mendukung setiap ide kreatif dan karya produktifmu.
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-4 px-2">
              <h3 className="font-serif font-bold text-main-expreso-b4 text-base tracking-wider uppercase">
                Perjalanan Seduhan
              </h3>
              <p className="text-main-expreso-p2 text-xs md:text-sm leading-relaxed max-w-xs">
                Di Sistech Caffe, kami memastikan Anda mendapatkan pengalaman menikmati kopi terbaik. Kami bergerak sepenuh hati dari hulu ke hilir—memilih biji kopi lokal, proses roasting yang presisi, hingga tersaji sempurna di cangkir Anda.
              </p>
            </div>

          </div>
        </section>
      </section>
      
      <section id="menu" className="menu-section mt-[12%] mb-20 m-[5%]">
          <h2 className="text-3xl font-serif font-bold text-center text-main-expreso-b2 block mb-2">
            Menu Sajian Terbaik Kami
          </h2>
          <p className="text-center text-xs md:text-sm text-accent-teals-b2 mb-10">
            Pilih kategori dan temukan amunisi terbaik peneman produktivitasmu hari ini.
          </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12 px-4 w-full">

              <button 
                onClick={() => setActiveCategory("kopi")}
                className={`relative rounded-2xl overflow-hidden h-24 md:h-32 transition-all duration-300 cursor-pointer shadow-sm group transform ${
                  activeCategory === "kopi" 
                    ? "ring-4 ring-main-expreso-b2 scale-105 z-10 shadow-md" 
                    : "opacity-75 hover:opacity-100 hover:scale-102"
                }`}
              >
                <img 
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=400&auto=format&fit=crop" 
                  alt="Kopi" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 flex items-center justify-center p-2">
                  <span className="text-white font-serif font-bold text-sm md:text-base tracking-wide drop-shadow-md">
                    Koleksi Kopi
                  </span>
                </div>
              </button>

              <button 
                onClick={() => setActiveCategory("manis")}
                className={`relative rounded-2xl overflow-hidden h-24 md:h-32 transition-all duration-300 cursor-pointer shadow-sm group transform ${
                  activeCategory === "manis" 
                    ? "ring-4 ring-main-expreso-b2 scale-105 z-10 shadow-md" 
                    : "opacity-75 hover:opacity-100 hover:scale-102"
                }`}
              >
                <img 
                  src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=400&auto=format&fit=crop" 
                  alt="Manis" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 flex items-center justify-center p-2">
                  <span className="text-white font-serif font-bold text-sm md:text-base tracking-wide drop-shadow-md">
                    Camilan Manis
                  </span>
                </div>
              </button>

              <button 
                onClick={() => setActiveCategory("asin")}
                className={`relative rounded-2xl overflow-hidden h-24 md:h-32 transition-all duration-300 cursor-pointer shadow-sm group transform ${
                  activeCategory === "asin" 
                    ? "ring-4 ring-main-expreso-b2 scale-105 z-10 shadow-md" 
                    : "opacity-75 hover:opacity-100 hover:scale-102"
                }`}
              >
                <img 
                  src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=400&auto=format&fit=crop" 
                  alt="Asin" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 flex items-center justify-center p-2">
                  <span className="text-white font-serif font-bold text-sm md:text-base tracking-wide drop-shadow-md">
                    Camilan Asin
                  </span>
                </div>
              </button>

              <button 
                onClick={() => setActiveCategory("berat")}
                className={`relative rounded-2xl overflow-hidden h-24 md:h-32 transition-all duration-300 cursor-pointer shadow-sm group transform ${
                  activeCategory === "berat" 
                    ? "ring-4 ring-main-expreso-b2 scale-105 z-10 shadow-md" 
                    : "opacity-75 hover:opacity-100 hover:scale-102"
                }`}
              >
                <img 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop" 
                  alt="Berat" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 flex items-center justify-center p-2">
                  <span className="text-white font-serif font-bold text-sm md:text-base tracking-wide drop-shadow-md">
                    Makanan Berat
                  </span>
                </div>
              </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center items-stretch px-4">
              {menuData[activeCategory]?.map((menu, index) => (
              <div 
                key={index} 
                className="bg-white border border-main-expreso-p4/20 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-amber-900/40 transition-all duration-300 group flex flex-col justify-between transform hover:-translate-y-1"
              >

                <div className="flex justify-between items-start">
                    <div className="text-2xl bg-main-expreso-p4/10 w-12 h-12 flex items-center justify-center rounded-xl">
                      {menu.icon}
                    </div>
                    {menu.tag && (
                      <span className="bg-main-expreso-p4 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">
                        {menu.tag}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex-grow">
                    <h3 className="font-serif font-bold text-main-expreso-b4 text-lg group-hover:text-amber-900 transition-colors duration-300">
                      {menu.name}
                    </h3>
                    <p className="text-main-expreso-p2 text-xs mt-2 leading-relaxed">
                      {menu.desc}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-main-expreso-p4/10">
                    <span className="font-bold text-main-expreso-b2 text-base">
                      {menu.price}
                    </span>
                    <button className="px-3 py-1.5 bg-main-expreso-p4 text-white text-xs font-semibold rounded-lg hover:bg-amber-900 transition-all cursor-pointer">
                      Pesan
                    </button>
                  </div>
              </div>
            ))}
            </div>

      </section>
      <section id="promo" className="mt-[10%] scroll-mt-24 px-4">
        <span className="text-2xl font-serif font-bold text-center text-main-expreso-b2 block mb-2">
          Promo Spesial Bulan Ini
        </span>
        <p className="text-center text-xs md:text-sm text-accent-teals-b2 mb-10">
          Nikmati penawaran terbatas khusus untuk menemani produktivitasmu.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
          <div className="relative bg-gradient-to-br from-[#1c110c] to-[#3a2218] rounded-2xl p-6 md:p-8 text-white overflow-hidden shadow-lg group">
            <div className="absolute right-[-20px] bottom-[-20px] text-9xl opacity-10 pointer-events-none font-bold">
              20%
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="bg-amber-900/50 border border-amber-700 text-second-orange-p4 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">
                  Khusus Mahasiswa
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-bold mt-3">
                  Promo Happy Hour Nugas
                </h3>
                <p className="text-stone-300 text-xs mt-2 max-w-sm leading-relaxed">
                  Tunjukkan kartu mahasiswamu setiap hari Senin hingga Jumat pukul 13.00 - 16.00 dan dapatkan diskon langsung untuk semua varian kopi.
                </p>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-stone-700">
                <span className="text-xs text-stone-400">Berlaku s/d 30 Juni 2026</span>
                <Link href="/order" className="px-4 py-2 bg-white text-[#1c110c] text-xs font-bold rounded-xl hover:bg-second-orange-p4 transition-all">
                  Klaim Promo
                </Link>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-[#fcfaf2] to-[#f4eee1] border border-main-expreso-p4/20 rounded-2xl p-6 md:p-8 text-main-expreso-b4 overflow-hidden shadow-sm group">
            <div className="absolute right-[-10px] bottom-[-10px] text-9xl opacity-5 pointer-events-none font-bold">
              ☕
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="bg-main-expreso-p4 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">
                  Bundling Hemat
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-bold mt-3">
                  Paket Senja Literasi
                </h3>
                <p className="text-main-expreso-p2 text-xs mt-2 max-w-sm leading-relaxed">
                  Dapatkan kombinasi sempurna 1 Kopi Susu Nawasena hangat dan 1 Croissant Senja renyah dengan harga yang jauh lebih hemat.
                </p>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-main-expreso-p4/10">
                <div className="flex items-center gap-2">
                  <span className="line-through text-stone-400 text-xs">Rp 43.000</span>
                  <span className="font-bold text-amber-900 text-base">Rp 35.000</span>
                </div>
                <Link href="/order" className="px-4 py-2 bg-[#1c110c] text-white text-xs font-bold rounded-xl hover:bg-amber-900 transition-all">
                  Beli Paket
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <footer className="bg-main-expreso-b4 py-8 mt-[20%] bottom-0 w-full">
        <div className="h-full w-full max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
          <div className="flex justify-between items-center gap-6">
            <a 
            href= "#"
            target="_blank"
            rel = "noopener noreferrer"
            className="text-main-expreso-p4 hover:text-second-orange transition-colors duration-300 text- font-medium"  
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            <a 
            href= "#"
            target="_blank"
            rel = "noopener noreferrer"
            className="text-main-expreso-p4 hover:text-second-orange transition-colors duration-300 text-sm font-medium"  
            >
              <svg className="w-15 h-15" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.0.069-.0.008 1.005.417 1.623.774 2.115 1.074.834 1.156.417 1.463.155.035-.308.158-.52.294-.64-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>

            <a 
            href= "#"
            target="_blank"
            rel = "noopener noreferrer"
            className="text-main-expreso-p4 hover:text-second-orange transition-colors duration-300 text-sm font-medium"  
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

          </div>
          <p className="text-center text-second-orange-b2 text-xs">
            &copy; {new Date().getFullYear()} Made with ❤️ by Azqya. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}