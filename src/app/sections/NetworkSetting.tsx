import { useTranslation } from "react-i18next"
// eslint-disable-next-line
import { useNetworkOptions, useNetworkState } from "data/wallet"
import { useCustomNetworks } from "data/settings/CustomNetworks"
// eslint-disable-next-line
import { InternalLink } from "components/layout"
import { RadioGroup } from "components/form"
import { Networks } from "config/networks"

const NetworkSetting = () => {
  // eslint-disable-next-line
  const { t } = useTranslation()
  const [network, setNetwork] = useNetworkState()
  // eslint-disable-next-line
  const { list } = useCustomNetworks()

  return (
      <RadioGroup
        options={Object.values(Networks)}
        value={network}
        onChange={setNetwork}
      />
  )
}

export default NetworkSetting
