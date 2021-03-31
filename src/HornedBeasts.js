import React from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';
import { AiFillHeart } from 'react-icons/ai';
import Card from 'react-bootstrap/Card';
// import CardDeck from 'react-bootstrap/CardDeck';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfHearts: 0
    }
  }

  buttonClicked = () => {
    this.setState({
      numberOfHearts: this.state.numberOfHearts + 1
    });
  }

  render() {
    return (
      <Card onClick={this.buttonClicked} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.image_url} style={{ width: '100%' }}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}<div><AiFillHeart />{this.state.numberOfHearts}</div>
          </Card.Text>
          <Button variant="primary" size="lg block">
            Favorite Horned Beast!
            </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeasts;