import './App.css';
import {React} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Index from './components/Index';
import CatInfo from './components/CatInfo';




function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Index/>
        </Route>
        <Route path="/Info/:id" children={<CatInfo/>}> 
        </Route>
      </Switch>  
    </Router>
   
  );
}

export default App;
