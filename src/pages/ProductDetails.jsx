import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function fetchProduct(id) {
  return fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
    res.json()
  );
}

function ProductDetails() {
  const { id } = useParams();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  if (isLoading) return <p>Loading product...</p>;
  if (isError) return <p>Something went wrong!</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>

      <img
        src={product.image}
        alt={product.title}
        style={{ width: "200px" }}
      />

      <p>{product.description}</p>

      <h2>Price: ${product.price}</h2>

      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductDetails;