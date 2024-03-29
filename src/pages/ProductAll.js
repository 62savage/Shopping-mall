import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export default function ProductAll() {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/62savage/Shopping-mall/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container>
      <Row>
        {productList.map((menu, i) => (
          <Col lg={3} key={i}>
            <ProductCard item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
