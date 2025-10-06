import React from 'react'
import { useSelector } from 'react-redux'
import perfumesMale from "../../images/perfumes_males.jpg";
import "../../styles/main.css"

export default function BinPage() {
    const items = useSelector((state) => state.items.items);
    const flatItems = items.flat();

    const element = flatItems.map(({id, brand , name, price}) => (
        <div key={id} className="product-card">
            <img src={perfumesMale} alt={name} className="product-card__img" />
            <h3 className="product-card__title">{brand} {name}</h3>
            <p className="product-card__price">{price} ₸</p>
        </div>
    ))
  return (
    <div>
        <div className="container shop__container">
            <h2 className="shop__title">Your Bin</h2>
            <div className="products">
                {element}
            </div>
        </div>
    </div>
  )
}
