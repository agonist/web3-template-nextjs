"use client";

import "@rainbow-me/rainbowkit/styles.css";

import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import "../styles/index.css";
import { clientEnv } from "../env/schema.mjs";
import { ThemeProvider } from "next-themes";
import NavBar from "../core/component/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { chains, provider } = configureChains(
    [mainnet, polygon, optimism, arbitrum],
    [
      alchemyProvider({ apiKey: clientEnv.NEXT_PUBLIC_ALCHEMY_ID! }),
      publicProvider(),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <html lang="en" className="dark">
      <body>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} theme={darkTheme()}>
            <ThemeProvider enableSystem={false} disableTransitionOnChange>
              <NavBar />
              {children}
            </ThemeProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
