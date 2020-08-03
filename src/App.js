import React from 'react';

import './App.css';
import Container from 'react-bootstrap/Container';
import Card from './Cads/Cards'
import Footer from './components/Footer'
import Header from './components/Header'
import Background from './assets/back-ground.jpg';

function App() {
  return (
      <Container>
          <div className="main-content">
          <Header />
          <div>
          <h3 style={{textAlign:'center',color:'white',backgroundColor:'#ed921a'}}>My Projects </h3>
          </div>         
          <Card />
          <div style={{marginTop:'2px'}}>

          </div>
          </div>

          <Footer />

          
                    

      </Container>
   
  );
}

export default App;
