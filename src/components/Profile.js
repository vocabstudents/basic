import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Profile({ name, img, desc, link }) {
    return (
        <Card className='col-md-4'>
            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/185526098?v=4" />
            <Card.Body>
                <Card.Title>Vocab</Card.Title>
                <Card.Text>
                    I am teaching MERN Stack.
                </Card.Text>
                <a href='https://github.com/vocabstudents' target='_black' variant="primary"><Button>Github Profile</Button>
                </a>
            </Card.Body>
        </Card>
    )
}

export default Profile;