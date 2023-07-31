import { useNetworkName } from "data/wallet"
import styles from "./NetworkName.module.scss"

const NetworkName = () => {
  // eslint-disable-next-line
  const name = useNetworkName()
  return <div className={styles.component}>{name.toUpperCase()}</div>
}

export default NetworkName
