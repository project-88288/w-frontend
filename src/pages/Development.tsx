import { useWallet, WalletStatus } from "@terra-money/wallet-provider"

export default function Development() {
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    connect,
    disconnect,
  } = useWallet()

  const w_list = Object.values(wallets)
  const chain = network.chainID //.map(o => o.chainID)
  const addesses = w_list.map((o) => o.terraAddress)

  return (
    <>
      {JSON.stringify({ status, wallets }, null, 2)}
      {JSON.stringify({ chain, addesses }, null, 2)}
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <>
          {availableConnectTypes.map((connectType) => (
            <button
              key={"connect-" + connectType}
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
  )
}
