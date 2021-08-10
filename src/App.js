import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects';
import Contact from './components/Contact'
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Route path='/' exact component={Banner} />
      <Route path='/About' component={AboutMe} />
      <Route path='/Projects' component={Projects} />
      <Route path='/Contact' component={Contact} />
    </div>
    </Router>
  );
}

export default App;
