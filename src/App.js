import './App.css';
import Profile from './components/Profile';
// import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Profile name='Aqil' lastName='Arif' />
      {/* <Message messageContent='Message from props' /> */}
    </div>
  );
}

export default App;
