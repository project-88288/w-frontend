import ReactDOM from 'react-dom';
import './index.css';
import App from 'app/App';
import {
  getChainOptions,
  WalletProvider,
} from '@terra-money/wallet-provider';

getChainOptions().then((chainOptions) => {
  ReactDOM.render(
    <WalletProvider {...chainOptions}>
      <App />
    </WalletProvider>,
    document.getElementById('root'),
  );
});

