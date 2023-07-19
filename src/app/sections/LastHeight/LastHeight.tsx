import { useTranslation } from "react-i18next"
import classNames from "classnames"
// eslint-disable-next-line
import { formatNumber } from "@terra.kitchen/utils"
import { Flex } from "components/flex"
import styles from "./LastHeight.module.scss"

const LastHeight = () => {
  // eslint-disable-next-line
  const { t } = useTranslation()
  const height = 23;//block?.header.height

  return (
    <Flex gap={4} className={styles.component} start>
      <div
        className={classNames(
          styles.indicator,
          height ? styles.success : styles.loading
        )}
      />
      {height ? (
        <p className={styles.text}>{`=${height} block`}
          #{formatNumber(height, { comma: true })}
        </p>
      ) : (
        <p className={styles.text}>{t("Loading...")}</p>
      )}
    </Flex>
  )
}

export default LastHeight
