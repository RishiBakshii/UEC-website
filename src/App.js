import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Home } from './screens/Home';
import { About } from './screens/About';
import { Contact } from './screens/Contact';
import { Services } from './screens/Services';

function App() {
  return (
    <Home/>
  );
}

export default App;
