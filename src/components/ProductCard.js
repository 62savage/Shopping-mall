import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="card" onClick={showDetail}>
      <img src={item?.img} alt="clothes" />
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>₩{item?.choice && "추천상품"}</div>
      <div>{item?.new && "신제품"}</div>
    </div>
  );
}
