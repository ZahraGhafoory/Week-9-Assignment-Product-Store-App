import Grid from "@mui/material/Grid";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/productsApi";
import ProductCard from "./ProductCard";
import { Typography } from "@mui/material";

function ProductList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <Typography>Loading products...</Typography>;
  if (isError) return <Typography>Error loading products</Typography>;

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"   // 👈 CENTER items
    >
      {data.map((product) => (
        <Grid
          key={product.id}
          xs={12}
          sm={6}
          md={4}
          display="flex"
          justifyContent="center"  // CENTER EACH CARD
        >
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;