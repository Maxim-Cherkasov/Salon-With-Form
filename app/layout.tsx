import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from "@/components/theme-provider"
import { NavigationBar } from '@/components/navigation-bar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'StyleCuts Studio',
  description: 'Premium Hair Salon Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationBar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}