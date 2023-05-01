
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 62.5%;
    /* scroll-behavior: smooth; */
    /* 1rem = 10px */
    overflow-x: hidden;
  }
  body {
    margin: 0;
    overflow-x: hidden;
    scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
    display: block;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  
  body::-webkit-scrollbar {
    width: 1.5rem;
  }
  
  body::-webkit-scrollbar-track {
     background-color: rgb(24 24 29);
  }
  
  body::-webkit-scrollbar-thumb {
   
    background: #fff;
      border: 5px solid transparent;
      border-radius: 9px;
      background-clip: content-box;
  }
h1 {
    font-size: 6rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.heading };
}
h2 {
    font-size: 5rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.heading };
}
h3 {
    font-size: 4rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.heading };
}
h4 {
    font-size: 3rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.heading };
}
h5 {
    font-size: 2rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.heading };
}
h6 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.heading };
}
p {
    font-size: 1rem;
    line-height: 1.5;
    color: ${({theme}) => theme.colors.text };
    font-weight: 400;
    margin-top: 1.5rem;
}
a {
    text-decoration: none;
}
  
li {
list-style: none;
}
.container {
    max-width: 120rem;
    margin: 0 auto;
  }
  
  .grid {
    display: grid;
    gap: 9rem;
  }
  
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .grid-four-column{
     grid-template-columns: 1fr 1.2fr .5fr .8fr ;
  }
  
    .common-heading {
        font-size: 3.8rem;
        font-weight: 600;
        margin-bottom: 6rem;
        text-transform: capitalize;
      }
  
      input, textarea{
      max-width: 50rem;
      color: ${({ theme }) => theme.colors.black};
      padding: 1.6rem 2.4rem;
      border: 1px solid ${({ theme }) => theme.colors.border};
      text-transform: uppercase;
     box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  }
      input[type="submit"]{
      max-width: 16rem;
      margin-top: 2rem;
      background-color: ${({ theme }) => theme.colors.btn};
      color: ${({ theme }) => theme.colors.white};
      padding: 1.4rem 2.2rem;
      border-style: solid;
      border-width: .1rem;
      text-transform: uppercase;
      font-size: 1.8rem;
      cursor: pointer;
      }
  
  
  /* ===========================================
  /* media queries  
  ======================================= */
  /* px  */
  /* rem  */
  /* em  */
  /* 1500px */
  
  //998px
  @media (max-width:${({ theme }) => theme.media.tab}) {
        .container{
          padding: 0 3.2rem;
        }
  
          .grid-three-column {
        grid-template-columns: 1fr 1fr;
      }
  }
  
  @media (max-width:${({ theme }) => theme.media.mobile}) {
  
        html{
          font-size: 50%;
        }
  
        .grid{
          gap: 3.2rem;
        }
  
        .grid-two-column, .grid-three-column, .grid-four-column{
          grid-template-columns: 1fr;
        }
  }


`;