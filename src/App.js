import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddNew from './components/AddNew/AddNew';
import Closet from './components/Closet/Closet';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/my-closet">
            <Closet />
          </Route>
          <Route path="/add-new">
            <AddNew />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
