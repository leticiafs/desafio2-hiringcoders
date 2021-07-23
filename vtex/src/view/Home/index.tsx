import React from "react";

import { Container } from './style';
import api from '../../services/api';
import { useState, useEffect } from "react";
import cartcart from '../../imgs/cartcart.png';


interface IProduct{
  id: number;
  name: string;
  description: string;
  photo: string;
  price: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])

  const handleCart = (index: number) => {
    let product = data[index];
    let push: any = [ ...cart, cart.push(product)];
    setCart(push);
    const productStore = JSON.stringify(cart);
    localStorage.setItem('@cart', productStore)
  } 
  
 

  return (
    <Container>
      <div className="cartlenght">
        <img src={cartcart} alt="cart" width="30px"/>
        <h4>{cart.length} itens</h4>
      </div>
      <section>
        { data.map( (produto, index) => (
          <div className="product-container" key={produto.id}>
            <img src={produto.photo} alt="produto" />
            <h2>{produto.name}</h2>
            <p>{produto.description}</p>
            <h3>R${produto.price},00</h3>
            <button onClick={() => handleCart(index)}>Add ao carrinho</button>
          </div>
        ))}
      </section>
    </Container>
  );
}

export default Home;