import { useWallet, WalletStatus } from '@terra-money/wallet-provider';
// eslint-disable-next-line
import { useNetworkState } from 'data/wallet';
//import React from 'react';
export default function Connect() {
  const {
    status,
    wallets,
    availableConnectTypes,
    connect,
    disconnect,
  } = useWallet();

  // eslint-disable-next-line
  const state = useNetworkState()
  let address = ''
  wallets.forEach(element => {
    address = element.addresses[state[0]]
  })
  // eslint-disable-next-line
  const chainID = state[0]; // or any other mainnet or testnet chainID supported by station (e.g. osmosis-1)
  return (
    <>
      { }
      {status === WalletStatus.WALLET_CONNECTED && (
        JSON.stringify(
          { address },
          null,
          2,
        )
      )}
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <>
          {availableConnectTypes.map((connectType) => (
            <button
              key={'connect-' + connectType}
              onClick={() => connect(connectType)}
            >
              Connect {connectType}
            </button>
          ))}
        </>
      )}
      {status === WalletStatus.WALLET_CONNECTED && (
        <button onClick={() => disconnect()}>Disconnect</button>
      )}
    </>
  );
}

