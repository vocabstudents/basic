import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Profile({ profile }) {
    return (
        <Card className='col-md-3'>
            <Card.Img variant="top" src={profile.img} />
            <Card.Body>
                <Card.Title>{profile.name}</Card.Title>
                <Card.Text>
                  {profile.desc}
                </Card.Text>
                <a href={profile.link} target='_' variant="primary"><Button>{profile.btn}</Button>
                </a>
            </Card.Body>
        </Card>
    )
}

export default Profile;