import { AppProps } from "next/app"
import { Container, Header } from "@/styles/pages/app"
import { globalStyles } from "@/styles/global"
import Image from 'next/image'
import imgLogo from '@/assets/logo.svg'

 globalStyles()

 function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={imgLogo} alt=''/>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
 }

 export default App