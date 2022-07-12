import { useEffect } from 'react';
import './App.css';

import CardList from './component/CardList';
import { Scroll } from './component/Scroll';
import { SearchBox } from './component/SearchBox';

import { connect } from 'react-redux';
import { requestRobot, setSearchField } from './redux/robotRedux/action'


function App({ onSearchChange, onRequestRobot, robot, isPending,  search }) {

  // const [robot, setRobot] = useState([]);
  // const [searchField, setSearchField] = useState('');

  useEffect(() => {
    onRequestRobot()
  }, [])

  // the search filter functionality
  const filteredRobot = robot.filter(bot =>
    bot.name.toLowerCase().includes(search.toLowerCase())
  )

  // const onSearchChange = e => setSearchField(e.target.value);

  return isPending ? <h2>Loading...</h2> : (
    <div className='tc'>
      <h1>Robo Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robot={filteredRobot} />
      </Scroll>
    </div>
  );
}

const mapStateToProps = ({ search, robot }) => ({
  search: search.searchField,
  robot: robot.robot,
  isPending: robot.isPending,
  error: robot.error
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: e => dispatch(setSearchField(e.target.value)),
  onRequestRobot: () => dispatch(requestRobot())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
