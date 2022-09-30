
import './App.css';
import 'normalize.css';
import Singup from './components/Main/Singup/Singup';
import Header from './components/Header/Header';
import Main from './components/Main/Main'
import '../src/styles/styles.scss';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header/>
        <Main/>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
