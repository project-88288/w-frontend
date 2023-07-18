import React from 'react';
import { useConnectedWallet, useWallet } from '@terra-money/wallet-kit';

function Connect() {
  const connectedWallet = useConnectedWallet();
  const { connect, disconnect, availableWallets } = useWallet();

  return (
    <section>
      <h4>Connect info:</h4>
      {connectedWallet ? (
        <>
          <button onClick={() => disconnect()}>Disconnect</button>
          <code>
            <pre>{JSON.stringify(connectedWallet, null, 2)}</pre>
          </code>
        </>
      ) : (
        availableWallets.map(({ id, name, isInstalled }) => (
          <button onClick={() => connect(id)} disabled={!isInstalled} key={id}>
            Connect {name}
          </button>
        ))
      )}
    </section>
  );
}

export default Connect;
