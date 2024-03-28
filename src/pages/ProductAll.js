import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";

export default function ProductAll() {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = "http://localhost:3004/products";
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Row>
        {productList.map((menu) => (
          <Col lg={3}>
            <ProductCard item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
