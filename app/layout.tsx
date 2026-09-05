import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Billd — Construction, connected',
  description: 'Billd gives construction teams the visibility and control to make every project more predictable.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-[#f5f5f2]"><body>{children}</body></html>
}
