
import Headers from '../Components/header'
import Footer from '../Components/footer'
import ButtonArea from '../Components/ButtonArea'
import Tagline from '../Components/TagLine'

import ImageArea from '@/Components/imageArea'
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Headers/>
      <Tagline/>
      <ButtonArea/>
      <ImageArea/>
      <Footer/>
    </div>
  )
}
