import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { Grid } from '@mui/material';
import Butons from './components/Butons';
import ImgBanner from './components/ImgBanner';
import styled from 'styled-components';
import Card from './components/Card/Card';
import { Title } from './shared/styles';

const products = [
  {
      image:'/imagen-.png',
      title:'Cool feature title',
      descripcion:'Learning curve network effects return on investment.',
  },
  {
      image:'/imagen-2.png',
      title:'Even cooler feature',
      descripcion:'Learning curve network effects return on investment.',
  },
  {
      image:'/imagen-3.png',
      title:'Cool feature title',
      descripcion:'Learning curve network effects return on investment.',
  },


]
const products2 = [
  {
      image:'/imagen-4.png',
      title:'Category',
      descripcion:'Pitch termsheet backing validation focus release.',
  },
  {
      image:'/imagen-5.png',
      title:'Category',
      descripcion:'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
  },
  {
      image:'/imagen-6.png',
      title:'Category',
      descripcion:'Beta prototype sales iPad gen-z marketing network effects value proposition',
  },
]

const Banner = styled.div`
  align-items: space-around;
  background:url('${process.env.PUBLIC_URL}/ellipse.png') no-repeat top right, ${({theme}) => theme.colors.primary} ;
  color:#fff;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;


`
const Container = styled.div`
  width:100%

`
const Products = styled.div`
  display:flex;
  justify-content:space-around;
  width:100%;

`
const TitleBanner = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  width:35rem;
  `
 

const desrciptionBanner = styled.h4`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
`


function App() {
  return (
    <Container>
      <Banner>
        <Navbar/>
        <Grid  
          container 
          rowSpacing={1} 
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="space-around"
          margin="1rem">
                  <Grid
                      item
                      xs={6}
                      md={4}>
                          <TitleBanner>Save time by building  fast with Boldo Template </TitleBanner>
                          <desrciptionBanner>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</desrciptionBanner>
                          <Butons/>

                  </Grid>
                  <Grid
                    item
                    xs={6}
                    md={4}>

                    <ImgBanner/>
                    </Grid>

          </Grid>

      </Banner>
        <Title>Handshake infographic mass market crowdfunding iteration.</Title>
        <Products>
          {products.map((product) => <Card {...product} />)}

        </Products>
        <Grid
          container
          rowSpacing={1} 
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="space-around"
          margin="1rem"
          >
            <Grid
              item
              xs={6}
              md={4}
              >
                <img src={`${process.env.PUBLIC_URL}/imagen-7.png`}/>
                
              </Grid>
              <Grid
              item
              xs={6}
              md={4}
              >
                <Title>We connect our customers with the best, and help them keep up-and stay open.</Title>
                <ul>
                  <li></li>
                </ul>
               
              </Grid>
          </Grid>
    </Container>

  );
}

export default App;
