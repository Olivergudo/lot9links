import Head from 'next/head'
import Logo from '../components/Logo_Lot9.svg'

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/fondo web.jpg')" }}
    >
      <Head>
        <title>Lot9 Enlaces</title>
        <meta name="description" content="Todos los enlaces de Lot9 en un solo lugar" />
      </Head>

      {/* Logo SVG blanco */}
      <Logo className="w-100 mb-12 text-white fill-white" />

      {/* Enlaces */}
      <div className="flex flex-col gap-4 w-full max-w-sm mt-4">
        <a
          href="https://lot-9-studio.vercel.app/"
          target="_blank"
          className="flex items-center justify-center gap-2 bg-[#4C4C4C] text-white font-semibold py-4 px-6 rounded-2xl text-center transition transform hover:scale-105"
        >
          🛒 Tienda Online
        </a>
        <a
          href="http://wa.me/523318592665"
          target="_blank"
          className="flex items-center justify-center gap-2 bg-[#4C4C4C] text-white font-semibold py-4 px-6 rounded-2xl text-center transition transform hover:scale-105"
        >
          💬 WhatsApp
        </a>
        <a
          href="https://drive.google.com/file/d/1LslybNDnvrQ6cpksdrBwajmWBjy81Ri0/view?usp=drive_link"
          target="_blank"
          className="flex items-center justify-center gap-2 bg-[#4C4C4C] text-white font-semibold py-4 px-6 rounded-2xl text-center transition transform hover:scale-105"
        >
          📖 Catálogo
        </a>
        <a
          href="https://www.instagram.com/lot9studio/"
          target="_blank"
          className="flex items-center justify-center gap-2 bg-[#4C4C4C] text-white font-semibold py-4 px-6 rounded-2xl text-center transition transform hover:scale-105"
        >
          📸 Instagram
        </a>
        <a
          href="https://www.tiktok.com/@lot9studio?is_from_webapp=1&sender_device=pc"
          target="_blank"
          className="flex items-center justify-center gap-2 bg-[#4C4C4C] text-white font-semibold py-4 px-6 rounded-2xl text-center transition transform hover:scale-200S"
        >
          🎵 TikTok 🎵
        </a>
      </div>
    </div>
  )
}