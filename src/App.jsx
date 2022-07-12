import { useState, useEffect } from 'react';
import './App.css';

import CardList from './component/CardList';
import { Scroll } from './component/Scroll';
import { SearchBox } from './component/SearchBox';


function App() {
  const [robot, setRobot] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    try {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {return res.json()})
        .then(data => setRobot(data))
    } catch (error) {
      console.log(error.message);
    }
  }, [])

  // the search filter functionality
  const filteredRobot = robot.filter(bot => 
    bot.name.toLowerCase().includes(searchField.toLowerCase())
  )

  const onSearchChange = e => setSearchField(e.target.value);

  return (
    <div className='tc'>
      <h1>Robo Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robot={filteredRobot}/>
      </Scroll>
    </div>
  );
}

export default App;
