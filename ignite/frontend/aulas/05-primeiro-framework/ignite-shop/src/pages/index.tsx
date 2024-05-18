import Image from "next/image"

import { HomeContainer, Product } from "@/styles/pages/home"

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={''} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={''} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}