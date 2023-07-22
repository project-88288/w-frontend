import { useTranslation } from "react-i18next"
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { Tabs,HeaderIconButton } from "components/layout"
import { Popover } from "components/display"
import PopoverNone from "../components/PopoverNone"
import LanguageSetting from "./LanguageSetting"

const LanguagePreferences = () => {
  const { t } = useTranslation()
  
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
