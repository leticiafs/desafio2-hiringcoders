import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  width: 80%;
  margin: auto;
  font-family: 'Lato', sans-serif;

  .cartlenght {
    text-align: right;
    padding-bottom: 10px;
  }

  section {
    min-height: 100vh;
    width: 100%;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .product-container {
      display: flex;
      text-align: center;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
      width: 230px;
      height: 380px;
      border-radius: 25px;
      padding: 15px;
      margin: 5px;
      font-family: 'Lato', sans-serif;
    }

    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.8rem;
    }

    h3 {
      font-size: 1.1rem;
      font-weight: bold;
    }

    img {
      padding: 0;
      width: 260px;
      height: 200px;
      object-fit: cover;
    }

    button {
      width: 150px;
      height: 40px;
      border-radius: 15px;
    }

    button:hover {
      background-color: black;
      color: lightpink;
      font-weight: bold;
    }
  }
`

