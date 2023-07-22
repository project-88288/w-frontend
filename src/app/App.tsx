// eslint-disable-next-line
import { Header, Layout, Sidebar, Content, Actions } from 'components/layout';
import './App.css';
// eslint-disable-next-line
import Connect from './components/Connect';
// eslint-disable-next-line
import Query from './components/Query';
// eslint-disable-next-line
import Nav from './sections/Nav';
import Aside from './sections/Aside';
import { useNav } from './routes';
import { Refresh } from '@mui/icons-material';
// eslint-disable-next-line
import  DevTools from './sections/DevTools';
import LanguagePreferences from './sections/LanguagePreferences';
import NetworkPreferences from './sections/NetworkPreferance';
import NetworkName from './sections/NetworkName';
//import { ConnectWallet } from './components/ConnectWallet';
import ConnectWallet from './sections/ConnectWallet';

function App() {
  const { element: routes } = useNav()
  return (
    <Layout>
      <Sidebar>
        <Nav />
        <Aside />
      </Sidebar>
      <Header>
      <NetworkName />
        
        <Actions>
          <section>
            <Refresh />
            <NetworkPreferences/>
            <LanguagePreferences/>
          </section>
        </Actions>
        <ConnectWallet/>
      </Header>
      <Content>
        {routes}
        <Connect />
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


