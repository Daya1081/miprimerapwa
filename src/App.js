import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import Header from './template/Header'
import Btninicio from './template/Btninicio'
import Footer from './template/Footer'
function App() {
  return(
    <div className='container-fluid'>
      <div className='container_personalizado'>
        <React.Fragment>
                <Header></Header>
                <Btninicio></Btninicio>
                <Footer></Footer>
         </React.Fragment>
      </div>
    </div>
  );
}
export default App;
