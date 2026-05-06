import { AppBar, Toolbar, Typography, Button, Badge, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartTotalItems } from "../features/cart/cartSlice";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

function Navbar() {
  // Redux cart count (ONLY ONE SOURCE OF TRUTH)
  const cartCount = useSelector(selectCartTotalItems);

  // Context (theme)
  const { state, dispatch } = useContext(SettingsContext);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        {/* Left side */}
        <Typography variant="h6">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Product Store
          </Link>
        </Typography>

        {/* Middle links */}
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/cart">
            Cart
          </Button>
        </Box>

        {/* Right side */}
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>

          <Button color="inherit" onClick={toggleTheme}>
            {state.theme === "dark" ? "Light Mode" : "Dark Mode"}
          </Button>

          <Badge badgeContent={cartCount} color="error">
            <ShoppingCartIcon />
          </Badge>

        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;