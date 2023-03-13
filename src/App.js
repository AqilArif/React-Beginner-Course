import './App.css';
// import Counter from './components/Counter';
import Profile from './components/Profile';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Profile name='Aqil' lastName='Arif' />
      <Message message='Hello john!' />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
