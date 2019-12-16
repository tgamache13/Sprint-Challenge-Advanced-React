import React from 'react';
import PlayerList from "./components/PlayerList";
import { useLocalStorage } from './components/useLocalStorage';



function App () {
  const [search, setSearch] = useLocalStorage('search', ''); 
  
   
  return (
    <div className="container">
    <h1 className="title">Women's World Cup Data</h1>
    <PlayerList search={search} setSearch={setSearch}/>
    </div>
  )
  
}

export default App;
