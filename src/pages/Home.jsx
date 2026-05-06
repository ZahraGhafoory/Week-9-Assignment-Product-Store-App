import ProductList from "../components/ProductList";
import { Container, Typography } from "@mui/material";

function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" mb={3}>
        Products
      </Typography>

      <ProductList />
    </Container>
  );
}

export default Home;