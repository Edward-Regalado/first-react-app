import React from 'react';
import './App.css'
// import Button from 'react-bootstrap/Button';
import { AiFillHeart } from 'react-icons/ai';
import Card from 'react-bootstrap/Card';
import './HornedBeasts.css';

// import CardDeck from 'react-bootstrap/CardDeck';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfHearts: 0
    }
  }

  imageClicked = () => {
    this.setState({
      numberOfHearts: this.state.numberOfHearts + 1
    });
    this.props.handleClick({
      title: this.props.title,
      description: this.props.description,
      image_url: this.props.image_url
    })
  }

  render() {
    return (
      <div className="cardContainer">
      <Card className="card-box"onClick={this.imageClicked} style={{ width: '80%' }}>
        <Card.Img variant="top" src={this.props.image_url} style={{ width: '100%' }} />
        <Card.Body>
          <Card.Title className="title">{this.props.title}</Card.Title>
          <Card.Text className="text">{this.props.description}</Card.Text>
          <Card.Text className="text">Number of Horns: {this.props.horns}</Card.Text>
        </Card.Body>
        <Card.Footer className="footer">
          <AiFillHeart className="heart" />{this.state.numberOfHearts}
        </Card.Footer>
      </Card>
      </div>
    );
  }
}

export default HornedBeasts;