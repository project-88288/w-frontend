import { atom, useRecoilState, useRecoilValue } from "recoil"
import { useWallet } from "@terra-money/wallet-provider"
import { useNetworks } from "app/InitNetworks"
import { sandbox } from "../scripts/env"
import { getStoredNetwork, storeNetwork } from "../scripts/network"
import { useNavigate } from "react-router-dom"

const networkState = atom({
  key: "network",
  default: getStoredNetwork(),
})

export const useNetworkState = () => {
  const [network, setNetwork] = useRecoilState(networkState)
  const navigate = useNavigate()

  const changeNetwork = (network: NetworkName) => {
    setNetwork(network)
    storeNetwork(network)
    navigate("/")
  }

  return [network, changeNetwork] as const
}

/* helpers */
export const useNetworkOptions = () => {
  const networks = useNetworks()
  // if (!sandbox) return

  return Object.values(networks).map(({ name }) => {
    return { value: name, label: name }
  })
}

export const useNetwork = (): CustomNetwork => {
  const networks = useNetworks()
  const network = useRecoilValue(networkState)
  const wallet = useWallet()

  if (sandbox) return networks[network] ?? networks.mainnet
  return wallet.network
}

export const useNetworkName = () => {
  const { name } = useNetwork()
  return name
}

export const useChainID = () => {
  const { chainID } = useNetwork()
  return chainID
}
