import { useTranslation } from "react-i18next"
import CloudSyncOutlinedIcon from '@mui/icons-material/CloudSyncOutlined';

//import { useIsClassic } from "data/query"
import { Tabs,HeaderIconButton } from "components/layout"
import { Popover } from "components/display"
// eslint-disable-next-line
import { sandbox } from "auth/scripts/env"
import PopoverNone from "../components/PopoverNone"
// eslint-disable-next-line
import NetworkSetting from "./NetworkSetting"

const NetworkPreferences = () => {
  const { t } = useTranslation()
  //const isClassic = true;// useIsClassic()

  const network = {
    key: "network",
    tab: t("Network"),
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
