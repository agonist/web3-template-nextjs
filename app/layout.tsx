"use client"

import "@rainbow-me/rainbowkit/styles.css"
import {
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit"
import { WagmiConfig, configureChains, createClient } from "wagmi"
import { arbitrum, mainnet, optimism, polygon } from "wagmi/chains"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"

import "../styles/index.css"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/SiteHeader"
import { ThemeProvider } from "@/components/ThemeProvider"
import { clientEnv } from "../env/schema.mjs"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { chains, provider } = configureChains(
    [mainnet, polygon, optimism, arbitrum],
    [
      alchemyProvider({ apiKey: clientEnv.NEXT_PUBLIC_ALCHEMY_ID! }),
      publicProvider(),
    ]
  )

  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
  })

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  })

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50"
        )}
      >
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} theme={darkTheme()}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="flex min-h-screen flex-col">
                <SiteHeader />
                <div className="container flex-1">{children}</div>
                {/* <SiteFooter /> */}
              </div>
            </ThemeProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  )
}
