// predefined components
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// custom components
import Btn from "./components/Btn";
import Profile from "./components/Profile";
import ProfileTable from "./components/ProfileTable";

function App() {
  const profiles = [
    {
      name: "Moin",
      img: "https://avatars.githubusercontent.com/u/186063909?v=4",
      desc: "I am Full Stack Developer.",
      link: "https://github.com/moinuddin-4678",
      btn: "Github Profile",
    },
    {
      name: "Basheer",
      img: "https://avatars.githubusercontent.com/u/182937907?v=4",
      desc: "I am learning MERN Stack.",
      link: "https://github.com/Basheer107",
      btn: "Github Profile",
    },
    {
      name: "Saad",
      img: "https://avatars.githubusercontent.com/u/182938196?v=4",
      desc: "I am studing MERN Stack.",
      link: "https://github.com/shk-Sam",
      btn: "Github Profile",
    },
  ];

  return (
    <div className="container mt-4">
      <h1>Profiles</h1>
      <div className="row">
        <div className="col-md-8">
          <ProfileTable profiles={profiles} />
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h3>Create Profile</h3>
            </div>
            <div className="card-body">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter Description" />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Link</Form.Label>
                  <Form.Control type="text" placeholder="Enter Github Profile Link" />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                <Button variant="primary" type="submit">
                  Add Profile
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='row'>
        {
          profiles.map((profile)=>{
            return <Profile profile={profile} />
          })
        }
      </div> */}
      {/* <Btn name="Sign Up"/> */}
    </div>
  );
}

export default App;
