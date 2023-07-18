import { useConnectedWallet, useLcdClient } from '@terra-money/wallet-kit';
import React, { useEffect, useState } from 'react';

export default function Query() {
  const lcd = useLcdClient(); // LCD stands for Light Client Daemon
  const connected = useConnectedWallet();
  const [balance, setBalance] = useState('');
  const chainID = 'phoenix-1'; // or any other mainnet or testnet chainID supported by station (e.g. osmosis-1)

  useEffect(() => {
    if (connected) {
      lcd.bank.balance(connected.addresses[chainID]).then(([coins]) => {
        setBalance(coins.toString());
      });
    } else {
      setBalance('');
    }
  }, [connected, lcd]); // useEffect is called when these variables change

  return (
    <div>
      {balance && <p>{balance}</p>}
      {!connected && <p>Wallet not connected!</p>}
    </div>
  );
}
