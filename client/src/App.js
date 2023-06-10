import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Link,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CreateHouse from './pages/CreateHouse';

function App() {
  return (
    <div className='App'>
      <Router>
        <Link to='/'>Go to home</Link>
        <Link to='createhouse'>Create a house</Link>
        <Switch>
          <Route path='/' exact Component={Home} />
          <Route path='/createhouse' exact Component={CreateHouse} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
