import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAppBar from './components/navigation/MyAppBar';

import Home from './pages/home';
import Forms from './components/places/forms';


import './App.css';


class App extends Component{

  constructor(props){
    super(props);
  }


  render(){
  return (
    <MuiThemeProvider>
      <div style={{'padding':'10px'}}> 
      <img 
      className="d-block w-100"
      src={process.env.PUBLIC_URL + 'images/head.png'}
      />
      </div>
      <MyAppBar></MyAppBar>
      <Home></Home>
      <Forms></Forms>
      <div>
      <img 
      className="d-block w-100"
      src={process.env.PUBLIC_URL + 'images/footer.png'}
      />
      </div>

    </MuiThemeProvider>
  );
}
}


export default App;
