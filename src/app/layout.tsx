import localFont from "next/font/local";
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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="font-cera">{children}</body>
    </html>
  )
}
