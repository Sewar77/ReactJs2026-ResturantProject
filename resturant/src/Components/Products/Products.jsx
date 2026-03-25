import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../api.js";

function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      console.log(res);
      setProducts(res.data);
      console.log("products: ", products);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async () => {
    try {
      const res = await api.post("/products", {});
      console.log(res);
      setProducts(res.data);
      console.log("products: ", products);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Typography>products from api store</Typography>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          justifyContent: "space-between",
          flexWrap: "wrap",
          p: 2,
        }}
      >
        {products.map((product) => {
          return (
            <Card sx={{ width: 500 }} key={product.id}>
              <CardMedia
                sx={{ height: 500, width: 500, p: 2, m: 2, borderRadius: 2 }}
                image={product.image}
                title="green iguana"
              />
              <CardContent>
                <Typography variant="h6">Title: {product.title}</Typography>
                <Typography variant="body1">
                  Description: {product.description}
                </Typography>
                <Typography>
                  {product.price}$ || Rating: {product.rating.rate}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Card>
    </>
  );
}

export default Products;
