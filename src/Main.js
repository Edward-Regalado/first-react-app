import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeasts from './HornedBeasts';
// import '.Main.css'

import data from './data.json';

class Main extends React.Component {
  render() {
    let beastArray = data.map(animal => {
      return <HornedBeasts
        name={animal.keyword}
        title={animal.title}
        image_url={animal.image_url}
        description={animal.description}
        handleClick={this.props.handleClick}
      />
    });

    return (
      <main>
        <CardColumns>
          {beastArray}
        </CardColumns>
      </main>
    );
  }
}

export default Main;