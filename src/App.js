import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Addusers from './Pages/Addusers';
import Edituser from './Pages/Edituser';
import Viewuser from './Pages/Viewuser';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/user/add" component={Addusers}></Route> 
        <Route exact path="/user/edit/:id" component={Edituser}></Route>    
        <Route exact path="/user/view/:id" component={Viewuser}></Route>       

      </Switch>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
