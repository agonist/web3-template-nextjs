"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export const WalletConnect = () => {
  return <ConnectButton chainStatus={"none"} showBalance={false} />;
};
