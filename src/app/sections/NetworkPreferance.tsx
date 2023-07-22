import { useTranslation } from "react-i18next"
import CloudSyncOutlinedIcon from '@mui/icons-material/CloudSyncOutlined';
import { Tabs,HeaderIconButton } from "components/layout"
import { Popover } from "components/display"
import PopoverNone from "../components/PopoverNone"
import NetworkSetting from "./NetworkSetting"

const NetworkPreferences = () => {
  const { t } = useTranslation()

  const network = {
    key: "network",
    tab: t("ChainID"),
    children: <NetworkSetting />,
    condition: undefined,
  }

  const tabs = [network]

  return (
    <Popover
      content={
        <PopoverNone>
          <Tabs tabs={tabs} type="line" state />
        </PopoverNone>
      }
      placement="bottom"
      theme="none"
    >
      <HeaderIconButton>
        <CloudSyncOutlinedIcon style={{ fontSize: 20 }} />
      </HeaderIconButton>
    </Popover>
  )
}

export default NetworkPreferences
