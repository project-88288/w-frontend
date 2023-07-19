// eslint-disable-next-line
import Layout, { Header, Sidebar } from 'components/layout/Layout';
import './App.css';
// eslint-disable-next-line
import Connect from './components/Connect';
// eslint-disable-next-line
import Query from './components/Query';
// eslint-disable-next-line
import Nav from './sections/Nav';
// eslint-disable-next-line
import Aside from './sections/Aside';

// eslint-disable-next-line
function Appx() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

// eslint-disable-next-line
function App() {
  return (
    <Layout>
      <Sidebar>
        <Appx />
        <Nav />
        <Aside/>
        <Appx />
      </Sidebar>

    </Layout>
  );
}

/*

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Connect />
        <Query />
      </header>
    </div>
  );
}
*/
export default App;


