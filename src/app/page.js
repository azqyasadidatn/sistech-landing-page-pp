export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">

    <nav className="w-full bg-white border-b border-stone-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <span className="font-serif font-bold text-main-expreso text-lg">Nawasena</span>
      <ul className="flex space-x-6 text-m font-medium text-stone-600">
        <li><a href="#" className="hover:text-amber-900 transition">Home</a></li>
        <li><a href="#" className="hover:text-amber-900 transition">Menu</a></li>
        <li><a href="#" className="hover:text-amber-900 transition">Order</a></li>
      </ul>
    </nav>

    <div className="Content-Container mx-auto m-[1%] mt-[4%]">
      <section className="first mx-auto">
        <span className="text-xl font-bold text-center text-main-expreso-b2 block mb-2">
          Di sini, setiap cangkir punya cerita, dan setiap sudut tahu mimpimu
        </span>
        <section className="flex justify-content image-first grid grid-cols-3 items-center m-[3%] mt-[10%] gap-4">
          <div className="card relative rounded-2xl object-cover shadow-lg h-64 md:h-80 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop" 
                alt="Sudut Ngopi Tenang" 
                className="h-full w-full rounded-2xl"
                />
                <div className="teks absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent rounded-2xl">
                  <span className="absolute bottom-[25%] left-4 text-2xl md:text-3xl font-bold text-second-orange-p4">
                    1,000+
                  </span>
                  <p className="absolute bottom-3 left-0 md:text-xs uppercase tracking-widest text-white font-bold pl-4 mt-1">
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
                  <span className="absolute bottom-[25%] left-4 text-2xl md:text-3xl font-bold text-second-orange-p4">
                    Eksklusif
                  </span>
                  <p className="absolute bottom-3 left-0 md:text-xs uppercase tracking-widest text-white font-bold pl-4 mt-1">
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
                  <span className="absolute bottom-[25%] left-4 text-2xl md:text-3xl font-bold text-second-orange-p4">
                    Free Wi-Fi
                  </span>
                  <p className="absolute bottom-3 left-0 md:text-xs uppercase tracking-widest text-white font-bold pl-4 mt-1">
                    Jaringan Cepat 24 Jam
                  </p>
                </div>
          </div>
          </section>
      </section>

      <section className="relative third mt-[10%] grid grid-cols-2">
        <div className="image image-first flex flex-col justify-center items-start gap-4 m-[3%] mt-[10%] ml-[7%]"> 
          <img 
          src="https://images.unsplash.com/photo-1586253181808-c030e7e1aa5e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Font of the caffe"
          className="rounded-2xl object-cover shadow-lg h-full w-full"
          >
          </img>
        </div>
        <div className="absolute w-[45%] inset-0 bg-main-expreso-p4/20 border-2 border-main-expreso-p2/30 rounded-2xl -translate-x-4 -translate-y-4 z-0  m-[3%]"></div>
        <div className="flex flex-col justify-content mt-[7%] p-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-Teals-b2">
              About Us
            </span>
            <h2 className="text-3xl font-serif font-bold text-main-expreso-b4">
              Tempat Cerita & Kafein Bertemu
            </h2>
            <p className="text-main-expreso-p2 text-sm leading-relaxed">
              Nawasena, yang diambil dari bahasa Sanskerta dengan arti masa depan yang cerah, 
              hadir sebagai sebuah ruang bagi para pencari inspirasi, mahasiswa, pembaca buku, hingga kreator digital. 
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
        
      </section>


    </div>
    </main>
  );
}