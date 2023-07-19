import { render } from 'react-dom';
import { StrictMode } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import 'index.scss';
import App from 'app/App';
import {
  getChainOptions,
  WalletProvider,
} from '@terra-money/wallet-provider';

getChainOptions().then((chainOptions) => {
  render(
    <StrictMode>
      <RecoilRoot>
        <BrowserRouter>
          <WalletProvider {...chainOptions}>
            <App />
          </WalletProvider>
        </BrowserRouter>
      </RecoilRoot>
    </StrictMode>,
    document.getElementById('station'),
  );
});

