import { GetServerSideProps } from "next";
 import Image from "next/image";
 import Link from "next/link";
 import Stripe from "stripe";
 import { stripe } from "../lib/stripe";
import { SuccessContainer, ImageContainer } from "@/styles/pages/success";

interface SuccessProps {
  costumerName: string;
  product: {
    name: string;
    imageUrl: string;
  }
}

export default function Success({ costumerName, product }: SuccessProps) {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>

      <ImageContainer>
      <Image src={product.imageUrl} width={120} height={110} alt="" />
      </ImageContainer>

      <p>
        Uhuul <strong>{costumerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa.
      </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  if (!session.customer_details || !session.line_items || !session.line_items.data.length) {
    return {
      notFound: true,
    };
  }

  const costumerName = session.customer_details.name;
  const productData = session.line_items.data[0].price?.product as Stripe.Product | undefined;

  if (!productData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      costumerName,
      product: {
        name: productData.name,
        imageUrl: productData.images[0]
      }
    }
  }
}