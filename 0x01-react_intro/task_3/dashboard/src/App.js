import logo from './holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" name="email"/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password"/>
          <button>OK</button>
        </form>
      </body>
      <footer className="App-footer">Copyright {getFullYear()} - {getFooterCopy(true)}</footer>
    </div>
  );
}

export default App;
