import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
body,html{
  margin:0;
  padding:0;
  box-sizing:border-box;
  width:100%;
  height:100%;
  overflow-x:hidden; 
}
body{
  font-size: 10px;
  background: var(--background);
  color: #fff;
}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  &::before,&::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
}

body{
  --nav-background: #1a2e38;
  --nav-color: #fff;
  --background: #161529;

  --card-background: #fff;
  --card-image-background: #f4f4f4;
  --card-btn-1: #7b61ff;
  --card-btn-2: #398d73;
  --card-price-background: #B32556;
  --card-price-color: #fff;
  
}

body {
  width: 100%;
  height: 100%;
  background-color: #e5e5f7;
  opacity: 0.8;
  background-image: radial-gradient(#3f3b48 1.2px, var(--background) 1.2px);
  background-size: 30px 30px;
  overflow: hidden;
}

.title{
  font-size: 2rem;
}

#root > div:first-child div div:first-child{
  padding: .4rem;
  font-size: 1rem;
  font-weight: 500;
  div:first-child{
    transform: scale(1.1);
  }
}

@media only screen and (min-width: 480px){
  #root > div:first-child > div{
    margin-top: 3.6rem;
    margin-right: .8rem;
  }
}

@media only screen and (min-width: 600px){
  #root > div:first-child > div div:first-child{
    font-size: 1.08rem;
    div:first-child *, *::before{
    transform: scale(1.2);
  }
  }
}

@media only screen and (min-width: 1024px){

  #root > div:first-child div div:first-child{
    padding: .5rem;
    padding-left: .7rem;
    div:first-child *, *::before{
      transform: scale(1.3);
    }
  }

}

@media only screen and (min-width: 900px) {
  .title{
    font-size: 3rem;
  }
}   
`;

export const Heading = styled.h1`
  font-family: "Inter", sans-serif;
`;