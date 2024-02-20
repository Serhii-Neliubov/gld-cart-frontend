import React from "react";
import { useParams } from "react-router-dom";
export default function CarPage() {
  const { id } = useParams();

  return (
    <div className="__container">
      <h1 style={{fontWeight: 'bold'}}>Вы открыли страницу поста {id}</h1>
    </div>
  );
}
