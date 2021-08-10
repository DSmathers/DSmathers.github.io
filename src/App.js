import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
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
    </div>
    </Router>
  );
}

export default App;
