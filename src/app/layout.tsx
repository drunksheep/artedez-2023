import localFont from '@next/font/local';
import './globals.css';


const atomicMarker = localFont({
  src: [
    {
      path: '../../public/fonts/AtomicMarker/atomicMarker.otf',
      weight: '400',
    }
  ],
  variable: '--font-marker'
});

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

const heavitasNeue = localFont({
  src: [
    {
      path: '../../public/fonts/HeavitasNeue/HeavitasNeueRegular.otf', 
      weight: '400',
    },
    {
      path: '../../public/fonts/HeavitasNeue/HeavitasNeueBold.otf',
      weight: '700', 
    }
  ],
  variable: '--font-neue'
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
