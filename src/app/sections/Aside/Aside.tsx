// eslint-disable-next-line
import LastHeight from "app/sections/LastHeight"
// eslint-disable-next-line
import Links from "app/sections/Links"
// eslint-disable-next-line
import styles from "./Aside.module.scss"
// eslint-disable-next-line
import { Grid } from "components/layout"
import classNames from "classnames"
// eslint-disable-next-line
const cx = classNames.bind(styles)

const Aside = () => {
  return (
    <Grid gap={20} className={styles.aside}>
      <Links />
      <LastHeight />
    </Grid>
  )
}

export default Aside
