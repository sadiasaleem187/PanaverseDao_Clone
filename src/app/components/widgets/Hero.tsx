import Image from "next/image"
import Wrapper from "../shared/Wrapper"
import hero from "/public/background.png"
import Button from "../shared/Button"
import Link from "next/link"
const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          {/* left saide */}
          <div className="flex-1">
            <h4 className="text-[#00616C] font-semibold text-lg mt-4">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
            <h1 className="text-5xl sm:text-6xl font-bold mt-2">Web 3.0 And Metaverse Development</h1>
            <p className="mt-6 text-lg text-slate-600">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
</p>
<p className="mt-2 text-lg text-slate-600"> Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
            <div className="mt-6">
            <Link href={'https://www.piaic.org/'}>
              <Button text="Learn More"/>
              </Link>
            </div>
          </div>
          {/* right saide */}
          <div className="flex-1">
            <Image src={hero} alt="hero poster" />
          </div>
        </div>
      </Wrapper>
    </section>

  )
}

export default Hero

