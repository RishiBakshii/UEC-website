import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Home } from './screens/Home';
import { About } from './screens/About';
import { Contact } from './screens/Contact';
import { Services } from './screens/Services';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route exact path='/' element={<Home/>}/>
    //     <Route exact path='/about' element={<About/>}/>
    //     <Route exact path='/contact' element={<Contact/>}/>
    //     <Route exact path='/services' element={<Services/>}/>
    //   </Routes>
    // </Router>
    <Home/>
  );
}

export default App;
