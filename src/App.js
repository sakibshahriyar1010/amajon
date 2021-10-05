
import { BrowserRouter, Switch,Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Note from './components/Eror/Note';
import Home from './components/Home/Home';
import Sarvice from './components/Sarvice/Sarvice';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Link to='/about'>About</Link>
   <Switch>
     <Route path='/home'>
       <Home></Home>
     </Route>
     <Route path='/about'>
       <About></About>
     </Route>
     <Route path='/sarvice'>
       <Sarvice></Sarvice>
     </Route>
     <Route exact path='/'>
       <Home></Home>
     </Route>
     <Route path='*'>
     <Note></Note>
     </Route>
   </Switch>
   </BrowserRouter>
    </div>
  );
}

export default App;
