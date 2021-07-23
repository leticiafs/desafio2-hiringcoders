import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *{
   padding: 0;
   margin: 0;
   background-color: antiquewhite;

    .top{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 20px;
    }

    .foot {
      text-align: center;
      margin-top: 30px;
      margin-bottom: 20px;
      font-family: 'Lato', sans-serif;
    }
 }
`