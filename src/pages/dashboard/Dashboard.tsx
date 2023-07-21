import { useTranslation } from "react-i18next"
import classNames from "classnames/bind"
import { Col, Page } from "components/layout"


import styles from "./Dashboard.module.scss"

const cx = classNames.bind(styles)

const Dashboard = () => {
  const { t } = useTranslation()
  const isClassic = true;

  return (
    <Page title={t("Dashboard")}>
      <Col>
        <header className={cx(styles.header, { trisect: !isClassic })}>
          {'isClassic && <LunaPrice />'}
          {'isClassic && <TaxRate />'}

        </header>

   
      </Col>
    </Page>
  )
}

export default Dashboard
