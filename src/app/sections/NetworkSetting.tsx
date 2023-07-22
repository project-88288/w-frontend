
import { useNetworkState } from "data/wallet"
import { RadioGroup } from "components/form"
import { useWallet } from "@terra-money/wallet-provider"

const NetworkSetting = () => {

  const { network: _network } = useWallet()
  const n_list = Object.values(_network)
  const n_array = n_list.map(o => o.chainID)
  let _list: Record<string, any> = {}
  n_array.forEach(element => {
    _list[element] = { value: element, label: element }
  })

  const [network, setNetwork] = useNetworkState()
 
  return (
    <RadioGroup
      options={Object.values(_list)}
      value={network}
      onChange={setNetwork}
    />
  )
}

export default NetworkSetting
