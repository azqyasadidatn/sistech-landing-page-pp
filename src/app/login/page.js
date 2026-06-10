"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
    
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Email dan password wajib diisi.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setError("Email atau password salah. Coba lagi.");
  };

  return (

    <main className="min-h-screen bg-[#faf8f5] flex flex-col">
      <nav className="w-full bg-white border-b border-stone-200 px-6 py-6 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="font-serif font-bold text-main-expreso text-lg">
          Sistech Caffe
        </Link>
        <ul className="flex space-x-6 text-m font-medium text-stone-600 mr-[3%]">
          <li><Link href="/#menu" className="hover:text-amber-900 transition">Menu</Link></li>
          <li><Link href="/#about" className="hover:text-amber-900 transition">About Us</Link></li>
          <li><Link href="/#promo" className="hover:text-amber-900 transition">Promo</Link></li>
        </ul>
      </nav>

      <div className="flex flex-1 flex-col md:flex-row">
        <div className="hidden md:flex md:w-1/2 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=900&auto=format&fit=crop"
            alt="Suasana Sistech Caffe"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#1c110c]/80 to-[#3a2218]/60 flex flex-col justify-end p-12">
            <span className="text-second-orange-p4 text-xs font-bold uppercase tracking-widest mb-3">
              Selamat datang kembali
            </span>
            <h2 className="font-serif text-3xl font-bold text-white leading-snug max-w-xs">
              Kopi sudah siap. Kursi favoritmu menunggu.
            </h2>
            <p className="text-stone-300 text-sm mt-3 max-w-xs leading-relaxed">
              Masuk untuk memesan lebih cepat, klaim promo, dan simpan menu favoritmu.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-main-expreso-p4 flex items-center justify-center text-white font-serif font-bold text-sm">
                S
              </div>
              <span className="text-stone-400 text-xs">Sistech Caffe · Ruang Komunal Terbaik 2026</span>
            </div>
          </div>

        </div>

        <div className="flex flex-1 md:w-1/2 items-center justify-center px-6 py-16">
          <div className="w-full max-w-sm">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-teals-b2">
                Member Area
              </span>
              <h1 className="font-serif text-3xl font-bold text-main-expreso-b4 mt-2">
                Masuk ke Akun
              </h1>
              <p className="text-main-expreso-p2 text-sm mt-1">
                Belum punya akun?{" "}
                <Link href="/register" className="text-amber-900 font-semibold hover:underline">
                  Daftar gratis
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-main-expreso-b4">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="kamu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-main-expreso-p4/30 rounded-xl px-4 py-3 text-sm text-main-expreso-b4 bg-white placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-900/40 focus:border-amber-900 transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="text-xs font-bold uppercase tracking-widest text-main-expreso-b4">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-xs text-amber-900 hover:underline">
                    Lupa password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full border border-main-expreso-p4/30 rounded-xl px-4 py-3 pr-11 text-sm text-main-expreso-b4 bg-white placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-900/40 focus:border-amber-900 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-main-expreso-b4 transition"
                    aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
                        <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 text-xs leading-relaxed">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-main-expreso-b4 hover:bg-amber-900 text-white font-bold text-sm py-3.5 rounded-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Masuk...
                  </>
                ) : (
                  "Masuk Sekarang"
                )}
              </button>

              <div className="flex items-center gap-3 my-1">
                <div className="flex-1 h-px bg-main-expreso-p4/20"/>
                <span className="text-xs text-stone-400">atau</span>
                <div className="flex-1 h-px bg-main-expreso-p4/20"/>
              </div>

              <button
                type="button"
                className="w-full border border-main-expreso-p4/30 hover:border-amber-900/40 bg-white text-main-expreso-b4 font-semibold text-sm py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Lanjutkan dengan Google
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="bg-main-expreso-b4 py-5 w-full">
        <p className="text-center text-second-orange-b2 text-xs">
          &copy; {new Date().getFullYear()} Made with ❤️ by Azqya. All rights reserved.
        </p>
      </footer>
    </main>
  );
}