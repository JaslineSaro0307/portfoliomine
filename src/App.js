import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { Nav } from './components/Nav/nav';
import { Front } from './components/front/front';
import { Contact } from './components/contact/contact';
import { About } from './components/about/about';
import { Qualification } from './components/qualification/qualification';
import { Certificates } from './components/certificates/certi';
import { Projects } from './components/projects/project';
import { Heart } from './components/contact/back';
import { Congrats } from './components/milestonetask2/congrats' 
import { Cricket } from './components/milestonetask3/cricket';
import { Lpage } from './components/milestonetask6/login';
import { Mangobanana } from './components/hookstask2/mangobanana';
import {Notification} from'./components/milestonetask5/notifications';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Nav/>,<Front/>,<About/>,<Qualification/>,<Certificates/>,<Projects/>,<Contact/>]}/>
      <Route path='/ab' element={[<Nav/>,<About/>]}/>
      <Route path='/contact' element={[<Nav/>,<Contact/>]}/>
      <Route path='/qualification' element={[<Nav/>,<Qualification/>]}/>
      <Route path='/certificates' element={[<Nav/>,<Certificates/>]}/>
      <Route path='/projects' element={[<Nav/>,<Projects/>]}/>
      <Route path='/f'element={[<Nav/>,<Heart/>]}/>
      <Route path='/projectone' element={[<Nav/>,<Congrats/>]}/>
      <Route path='/projecttwo' element={[<Nav/>,<Cricket/>]}/>
      <Route path='/projectthree' element={[<Nav/>,<Lpage/>]}/>
      <Route path='/projectfour' element={[<Nav/>,<Mangobanana/>]}/>
      <Route path='/projectfive' element={[<Nav/>,<Notification/>]}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
