import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Products } from '@/components/sections/Products'
import { Impact } from '@/components/sections/Impact'
import { About } from '@/components/sections/About'
import { CEO } from '@/components/sections/CEO'
import { Contact } from '@/components/sections/Contact'
import { WaveDivider } from '@/components/ui/WaveDivider'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WaveDivider colorClass="text-white dark:text-sh-deep" />
        <Products />
        <WaveDivider flip colorClass="text-sh-base" />
        <Impact />
        <WaveDivider colorClass="text-sh-petal dark:text-sh-deep" />
        <About />
        <WaveDivider flip colorClass="text-sh-base" />
        <CEO />
        <WaveDivider colorClass="text-sh-blush dark:text-sh-base" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
