import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './components/header/Header';
import Product_Cart from './components/Product_Cart/Product_Cart';
import Main from './pages/main/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/orders">
          <Product_Cart />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
