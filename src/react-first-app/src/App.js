import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import ImageHeaderVisualization from "./Components/ImageHeader/Image-Header-Visualization"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ImageHeaderVisualization></ImageHeaderVisualization>
      <div className="Body">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
