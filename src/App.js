import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './components/header/Header';
import Main from './pages/main/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/orders">
          <div>123123123123</div>
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
