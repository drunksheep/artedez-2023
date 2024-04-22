import { Metadata } from "next";
import localFont from "next/font/local";
import FacebookPixel from "./components/FacebookPixel";
import './globals.css';


const ceraPro = localFont({
  src: [
    {
      path: '../../public/fonts/CeraPro/ceraProRegular.otf',
      weight: '400',
    },
    {
      path: '../../public/fonts/CeraPro/ceraProBold.otf',
      weight: '700'
    }
  ],
  variable: '--font-cera'
});

const nexaHeavy = localFont({
  src: [
    {
      path: '../../public/fonts/NexaHeavy/NexaHeavy.otf',
      weight: '700',
    },
  ],
  variable: '--font-nexa'
});

export const metadata: Metadata = {
  title: 'Arte Dez - Design',
  description: 'Entregamos não apenas projetos, mas resultados que impulsionam o seu negócio e trazem lucro real',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="font-cera">
        {children}
        <FacebookPixel />
        </body>
    </html>
  )
}
