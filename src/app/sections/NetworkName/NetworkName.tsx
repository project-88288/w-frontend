import { useNetworkState } from "data/wallet"
import styles from "./NetworkName.module.scss"

const NetworkName = () => {
  
  const [ network ] = useNetworkState()
  return <div className={styles.component}>{network.toUpperCase()}</div>
}

export default NetworkName
