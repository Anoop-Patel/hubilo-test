import { useState } from 'react';
import './App.scss';
import Home from './page/Home';
import UserPage from './page/UserPage';

function App() {
  const [showHomePage,setShowHomePage]=useState(true);

  return (
    <div className="App">
      
   { showHomePage && <Home showHomePage={showHomePage } setShowHomePage={setShowHomePage}/>}

     { !showHomePage && <UserPage showHomePage={showHomePage } setShowHomePage={setShowHomePage}/>}
    </div>
  );
}

export default App;
