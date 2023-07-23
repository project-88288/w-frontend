import { useTranslation } from "react-i18next"
import DomainIcon from "@mui/icons-material/Domain"
//import { useIsClassic } from "data/query"
import { Tabs } from "components/layout"
import { Popover } from "components/display"
//import { sandbox } from "auth/scripts/env"
import PopoverNone from "../components/PopoverNone"
import HeaderIconButton from "../components/HeaderIconButton"
import NetworkSetting from "./NetworkSetting"
//import LanguageSetting from "./LanguageSetting"

const NPreferences = () => {
  const { t } = useTranslation()

  const network = {
    key: "network",
    tab: t("Network"),
    children: <NetworkSetting />,
    condition: ["sandbox"],
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
        <DomainIcon style={{ fontSize: 18 }} />
      </HeaderIconButton>
    </Popover>
  )
}

export default NPreferences
