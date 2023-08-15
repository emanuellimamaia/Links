import Image from 'next/image'
import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'
import {FaWhatsapp} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-800 flex-col items-center justify-between p-24">
      <div>
        <Image
          src="/images/foto_perfil.jpg"
          width={200}
          height={200}
          alt='foto de perfil'
          className='border-4 border-emerald-400 w-72 h-72 rounded-full overflow-hidden'
        ></Image>
      </div>
      <div className="text-gray-400">
        <Link href="https://www.instagram.com/_emanuelmaia_/">@_emanuelmaia_</Link>
      </div>
      <div className="flex flex-col">
        <Link href="https://www.linkedin.com/in/emanuel-lima-maia-a222a7247/" className=" flex justify-center text-gray-400 border  hover:text-emerald-400  border-emerald-400 p-2 mt-2 h-12 w-80" >Linkedin</Link>
        <Link href="https://portifolio.emanuelmaia.site/" className=" flex justify-center text-gray-400 border  hover:text-emerald-400 border-emerald-400 p-2 mt-2 h-12 w-80 ">Portifolio</Link>
        <Link href="https://github.com/emanuellimamaia" className=" flex justify-center text-gray-400 border  hover:text-emerald-400 border-emerald-400 p-2 mt-2 h-12 w-80">Github</Link>
      </div>
      <div className='flex flex-row items-center justify-center'>
        <Link href="htpp://google.com" className="p-4 text-gray-400 hover:text-emerald-400 ">
          <FiGithub />
        </Link >
        <Link href="https://wa.me/92991004322" className='p-4 text-gray-400  hover:text-emerald-400 ' >
          <FaWhatsapp />
        </Link>
        <Link href="https://www.linkedin.com/in/emanuel-lima-maia-a222a7247/" className='p-4 text-gray-400  hover:text-emerald-400 ' >
          <FaLinkedin />
        </Link>
      </div>
    </main>
  )
}
