
import './App.css';
import Application from './components/Application';
import Apptrack from './components/Apptrack';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import ScholarshipList from './components/ScholarShip';

// import './components/SignUp.css'
import SignUp from'./components/SignUp';
import SocialLogin from './components/SocialLogin'

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<SocialLogin/>}/>
      <Route path='/view' element={<ScholarshipList/>}/>
      <Route path='/apply' element={<Application/>}/>
      <Route path='/track' element={<Apptrack/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
