import type { Metadata } from 'next'
import {notFound} from 'next/navigation';

import { Inter } from 'next/font/google'
import './globals.css'
const locales = ['en', 'ar'];

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Baraka investment report',
  description: 'A report for your pervious investment',
}

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }
export default function LocaleLayout({children, params: {locale}}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}