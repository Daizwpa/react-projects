import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [pepole, setPeople] = useState(data);
  return <>
  <main>
  <div className="container">
      <h3>{pepole.length +'birthdays today'}</h3>
      <List pepole={pepole}/>
      <button className="btn" onClick={()=>{setPeople([])}}>clear list</button>

    </div>
  </main>
   
  </>
}

export default App;
