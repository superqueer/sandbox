import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/Navbar/SideBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settnings/Settings';





const App = () => {
  return (

    <BrowserRouter>
      <div className="appwrapper">
        <Header />
        <SideBar />

        <div className='grid_container'>
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
       
      </div>
    </BrowserRouter>

  );
}

export default App;