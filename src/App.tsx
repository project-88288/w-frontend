import "./App.css";
import {
  useConnectedWallet,
} from "@terra-money/wallet-kit";

// eslint-disable-next-line
import { ConnectWallet } from "./components/ConnectWallet";
// eslint-disable-next-line
import { Contract } from "./components/Contract";
import Connect from "components/Connect";
import Query from "components/Query";
const App = () => {
  // eslint-disable-next-line
  const connected = useConnectedWallet();

  return (
    <div className="App">
      <header className="App-header">
        <Connect/>
        <Query/>
      </header>
    </div>
  );
};

export default App;
