import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Header({ title, subtitle }) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
}

function App() {
  const [info] = useState({
    title: 'Welcome to Fullstack Development - I',
    subtitle: 'React JS Programming Week09 Lab exercise',
    studentId: '101584721',
    name: 'Eneiyavan Sivaganesan',
    college: 'George Brown College, Toronto',
  });

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="React logo" />
      <Header title={info.title} subtitle={info.subtitle} />
      <h3>{info.studentId}</h3>
      <h4>{info.name}</h4>
      <h5>{info.college}</h5>
    </div>
  );
}

export default App;