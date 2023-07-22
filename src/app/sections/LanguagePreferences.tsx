import { useTranslation } from "react-i18next"
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
//import LanguageIcon from "@mui/icons-material/Language"
//import { useIsClassic } from "data/query"
import { Tabs,HeaderIconButton } from "components/layout"
import { Popover } from "components/display"
// eslint-disable-next-line
import { sandbox } from "auth/scripts/env"
import PopoverNone from "../components/PopoverNone"
// eslint-disable-next-line
import NetworkSetting from "./NetworkSetting"
import LanguageSetting from "./LanguageSetting"

const LanguagePreferences = () => {
  const { t } = useTranslation()
  //const isClassic = true;// useIsClassic()

  const lang = {
    key: "lang",
    tab: t("Language"),
   children: <LanguageSetting />,
    condition: undefined,
  }

  const tabs = [lang]

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
        <TranslateOutlinedIcon style={{ fontSize: 20 }} />
      </HeaderIconButton>
    </Popover>
  )
}

export default LanguagePreferences
