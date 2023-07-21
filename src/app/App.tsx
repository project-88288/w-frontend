
import { Header, Layout, Sidebar, Content } from 'components/layout';
import './App.css';
// eslint-disable-next-line
import Connect from './components/Connect';
// eslint-disable-next-line
import Query from './components/Query';
// eslint-disable-next-line
import Nav from './sections/Nav';
import Aside from './sections/Aside';
import { useNav } from './routes';

function App() {
  const { element: routes } = useNav()
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
        {routes}
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


