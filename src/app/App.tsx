// eslint-disable-next-line
import { Header, Layout, Sidebar, Content } from 'components/layout';
import './App.css';
// eslint-disable-next-line
import Connect from './components/Connect';
// eslint-disable-next-line
import Query from './components/Query';
// eslint-disable-next-line
import Nav from './sections/Nav';
// eslint-disable-next-line
import Aside from './sections/Aside';

/*
// eslint-disable-next-line
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}
*/
// eslint-disable-next-line
function App() {
  return (
    <Layout>
      <Sidebar>
        <Nav />
        <Aside />
      </Sidebar>
<Header>
<Aside />
</Header>
      <Content>
        <Aside />
      </Content>
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


