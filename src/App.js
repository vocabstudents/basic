import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Btn from './components/Btn';
import Profile from './components/Profile';

function App() {

  const profiles = [
    {
      name: "Moin",
      img: "https://avatars.githubusercontent.com/u/186063909?v=4",
      desc: "I am Full Stack Developer.",
      link: "https://github.com/moinuddin-4678",
      btn: "Github Profile"
    },
    {
      name: "Basheer",
      img: "https://avatars.githubusercontent.com/u/182937907?v=4",
      desc: "I am learning MERN Stack.",
      link: "https://github.com/Basheer107",
      btn: "Github Profile"
    },
    {
      name: "Saad",
      img: "https://avatars.githubusercontent.com/u/182938196?v=4",
      desc: "I am studing MERN Stack.",
      link: "https://github.com/shk-Sam",
      btn: "Github Profile"
    }
  ]; 
  

  return (
    <div className='container mt-4'>
      <h1>Profiles</h1>
      <div className='row'>
        {
          profiles.map((profile)=>{
            return <Profile profile={profile} />
          })
        }
      </div>
      {/* <Btn name="Sign Up"/> */}
    </div>
  );
}

export default App;