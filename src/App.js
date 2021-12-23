import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>The Lipstick Database</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Lipstick database" />
            </Helmet>

      <header className="App-header">
        <h1>The Lipstick Database</h1>
        <h3>Explore different brands, shades, textures at various pricepoints tailored just for you.</h3>
      </header>
    </div>
  );
}

export default App;
