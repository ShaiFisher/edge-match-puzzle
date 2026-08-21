import React from 'react';
//import logo from './logo.svg';
import image1 from './images/fisher1.png'
import image2 from './images/fisher2.png'
import image3 from './images/fisher3.png'
import image4 from './images/fisher4.png'
import image5 from './images/fisher5.png'
import './App.css';
import EdgeMatchPuzzleApp from './components/EdgeMatchPuzzleApp'

const DIM = 3
const FIGURES = [image1, image2, image3, image4, image5]

function App() {
  return (
    <EdgeMatchPuzzleApp dimensions={DIM} figures={FIGURES} />
  );
}

export default App;
