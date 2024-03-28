import React from "react";

export default function ProductCard({ item }) {
  return (
    <div>
      <img src={item?.img} alt="clothes" />
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new && "신제품"}</div>
    </div>
  );
}
