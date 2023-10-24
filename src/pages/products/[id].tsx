import { GetServerSideProps } from "next";

// Define a type for our product data
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "physical" | "digital";
};

// Define a type for our props
interface PropductProps {
  product: Product;
}

// Export the page component
export default function productsPage({ product }: PropductProps) {
  // Render the product
  return (
    <div style={{ height: "100vh", padding: 50 }}>
      <h1>계속 되는지 테스트...</h1>
      <h1 style={{ color: "red" }}>이름: {product.name}</h1>
      <h2 style={{ color: "blue" }}>가격: {product.price}</h2>
      <p>설명: {product.description}</p>
      <p>분류: {product.category}</p>
    </div>
  );
}

// Export the getServerSideProps function with GetServerSideProps type
export const getServerSideProps: GetServerSideProps<{
  product: Product;
}> = async (context) => {
  // get product id from the url
  const productId = parseInt(context.params?.id as string) || 1;

  // Define the API url with the product id
  const API_URL = `https://api.slingacademy.com/v1/sample-data/products/${productId}`;

  // Fetch data
  const res = await fetch(API_URL);

  // Parse the data
  const data = await res.json();
  const product = data.product;

  // If the product is not found, return notFound - 404 page
  if (product === null) {
    return {
      notFound: true,
    };
  }

  // Return the product as props
  return {
    props: {
      product,
    },
  };
};
