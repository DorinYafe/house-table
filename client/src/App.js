import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import CreateHouse from './pages/CreateHouse';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact Component={Home} />
          <Route path='/createhouse' exact Component={CreateHouse} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
