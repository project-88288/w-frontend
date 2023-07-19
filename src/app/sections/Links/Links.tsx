import { useTranslation } from "react-i18next"
// eslint-disable-next-line
import DescriptionIcon from "@mui/icons-material/Description"
// eslint-disable-next-line
import { TUTORIAL } from "config/constants"
//import { useIsClassic } from "data/query"
//import { ExternalLink } from "components/general"
//import { Contacts } from "components/layout"
import styles from "./Links.module.scss"

const Links = () => {
  // eslint-disable-next-line
  const { t } = useTranslation()
  const isClassic = false;// useIsClassic()
// eslint-disable-next-line
  const community = isClassic
    ? {
        discord: "https://terra.sc/classicdiscord",
        telegram: "https://t.me/TerraLunaChat",
        twitter: "https://twitter.com/terrac_money",
      }
    : {
        medium: "https://medium.com/terra-money",
        discord: "https://terra.sc/discord",
        telegram: "https://t.me/TerraNetworkLobby",
        twitter: "https://twitter.com/terra_money",
        github: "https://github.com/terra-money",
      }

  return (
    <div className={styles.links}>
      <div className={styles.tutorial}>
 
      </div>

      <div className={styles.community}>
      
      </div>
    </div>
  )
}

export default Links
