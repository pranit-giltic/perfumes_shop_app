import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../toolkit/Slices/dataSliceProducts";
import perfumesMale from "../../images/perfumes_males.jpg";
import Bin from "../../const/Bin/Bin";
import { addToCart } from "../../toolkit/Slices/addSliceBinProduct";

export default function Shop() {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchData());

  }, [dispatch]);


 
const element = products.map(({ id, name, brand, price }) => (
  <div key={id} className="product-card">
    <img src={perfumesMale} alt={name} className="product-card__img" />
    <h3 className="product-card__title">{brand} {name}</h3>
    <p className="product-card__price">{price} ₸</p>
    <button onClick={() => dispatch(addToCart({name, brand, price, id}))} className="product-card__btn">В корзину</button>
  </div>
));




  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="container shop__container">
        <h2 className="shop__title">Our Products</h2>
      <div className="products">
        {element}
      </div>
      <Bin/>
    </div>
  );
}
