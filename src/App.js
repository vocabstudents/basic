import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Btn from './components/Btn';
import Profile from './components/Profile';

function App() {

  return (
    <div className='container mt-4'>
      <div className='row'>
        <Profile />
      </div>
      {/* <Btn name="Sign Up"/> */}
    </div>
  );
}

export default App;