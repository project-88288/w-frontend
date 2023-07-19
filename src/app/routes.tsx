// eslint-disable-next-line
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
// eslint-disable-next-line
import { useNavigate, useRoutes } from "react-router-dom"

import { ReactComponent as WalletIcon } from "styles/images/menu/Wallet.svg"
import { ReactComponent as NFTIcon } from "styles/images/menu/NFT.svg"
import { ReactComponent as HistoryIcon } from "styles/images/menu/History.svg"
import { ReactComponent as SwapIcon } from "styles/images/menu/Swap.svg"
import { ReactComponent as StakeIcon } from "styles/images/menu/Stake.svg"
import { ReactComponent as GovernanceIcon } from "styles/images/menu/Governance.svg"
import { ReactComponent as ContractIcon } from "styles/images/menu/Contract.svg"




const ICON_SIZE = { width: 20, height: 20 }

export const useNav = () => {
  const { t } = useTranslation()

  const menu = [
    {
      path: "/wallet",
      element: null,
      title: t("Wallet"),
      icon: <WalletIcon {...ICON_SIZE} />,
    },
    {
      path: "/history",
      element: null,
      title: t("History"),
      icon: <HistoryIcon {...ICON_SIZE} />,
    },
    {
      path: "/swap",
      element: null,
      title: t("Swap"),
      icon: <SwapIcon {...ICON_SIZE} />,
    },
    {
      path: "/stake",
      element: null,
      title: t("Stake"),
      icon: <StakeIcon {...ICON_SIZE} />,
    },
    {
      path: "/gov",
      element: null,
      title: t("Governance"),
      icon: <GovernanceIcon {...ICON_SIZE} />,
    },
    {
      path: "/nft",
      element: null,
      title: t("NFT"),
      icon: <NFTIcon {...ICON_SIZE} />,
    },
    {
      path: "/contract",
      element: null,
      title: t("Contract"),
      icon: <ContractIcon {...ICON_SIZE} />,
    },
  ]

  const routes = [


    /* dev */
    { path: "/labs", element: null },

    /* 404 */
    { path: "*", element: null },
  ]

  return { menu, element: useRoutes(routes) }
}


