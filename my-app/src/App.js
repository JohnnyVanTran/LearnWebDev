import React from 'react';
import './styles/App.css';
import NavigationTabs from './components/NavigationTabs';
import profile from './resources/profile.jpg'

function App() {
  return (
    <div className="App">
      <div id="mainContainer">
        <img src={profile}/>
        <h1>Johnny Van Tran</h1>
        <NavigationTabs/>
      </div>
        
    </div>
  );
}

export default App;
