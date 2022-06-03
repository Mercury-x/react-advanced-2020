import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../../9-custom-hooks/final/2-useFetch';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products';

// every time props or state changes, component re-renders
const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price > total) total = price;
      return total;
    }, 0) / 100
  );
};
const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  );
  console.log(mostExpensive);

  const addCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  // when add cart change the state, Index will rerender
  // and addCart will be a new func whitch has a new address
  // so, the single item get a new prop, then all single item will rerender
  // const addCart = () => {
  //   setCart(cart + 1);
  // };

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1>Cart : {cart}</h1>
      <h1>MostExpensiveProduct : ${mostExpensive}</h1>
      <BigList products={products} addToCart={addCart} />
    </>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  return (
    <section className='products'>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;
  console.log('single item called');
  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  );
};
export default Index;
