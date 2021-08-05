
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomeMenu from './Components/HomeMenu'
import Prayers from './Components/Prayers'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Library from './Components/Library';

const App = () => {
  return (
    <>
<Router>
  <Header/>
  
          <Switch>
              <Route exact path = '/' component={HomeMenu}/>
              <Route exact path='/library/:subject' component={Library}/> 
          </Switch>
          
        <Footer/>
      </Router>
   </>
  

  );
}

export default App;

