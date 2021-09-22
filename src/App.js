
import './App.css';
import Header from './components/Header.jsx';
import Contact from './components/contact';
import Photo from './components/photo';
import Skills from './components/skills';
import Name from './components/name';

function App() {
  return (
    <div className="App"> 
      <br/>
      <Header/>
      <br/>
      <Photo/>
      <br/>
      <Name/>
      <br/>
      <Skills/>
      <br/>
     <Contact/>
    </div>
  );
}

export default App;
