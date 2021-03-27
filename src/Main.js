import React from 'react';
import HornedBeasts from './HornedBeasts';


class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeasts name='photo-1' title='xyz' imgUrl="https://via.placeholder.com/250" description='123' />
        <HornedBeasts name='photo-2' title='xyz' imgUrl="https://via.placeholder.com/250" description='123' />
        <HornedBeasts name='photo-3' title='xyz' imgUrl="https://via.placeholder.com/250" description='123' />
      </main>)
  }
}

export default Main;