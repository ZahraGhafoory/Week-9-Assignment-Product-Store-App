import { Card, CardContent, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card
      onClick={goToDetails}
      sx={{
        width: 250,
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
        },
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "100%",
          height: 150,
          objectFit: "contain",
          padding: 10,
        }}
      />

      <CardContent>
        <Typography variant="h6" noWrap>
          {product.title}
        </Typography>

        <Typography>${product.price}</Typography>

        <Button
          variant="contained"
          size="small"
          onClick={(e) => {
            e.stopPropagation(); // IMPORTANT (prevents navigation)
            dispatch(addToCart(product));
          }}
          sx={{ mt: 1 }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;