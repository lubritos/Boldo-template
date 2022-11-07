import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { Grid } from '@mui/material';
import Butons from './components/Butons';
import ImgBanner from './components/ImgBanner';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Grid  
            container
            spacing={2}>
                <Grid
                    item
                    xs={6}
                    md={4}>
                        <h2>Save time by building  fast with Boldo Template </h2>
                        <h4>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</h4>
                        <Butons/>

                </Grid>
                <Grid
                  item>

                  <ImgBanner/>
                  </Grid>

        </Grid>
    </div>
  );
}

export default App;
