interface SiteConfig {
  name: string
  description: string
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "web3/template",
  description: "A web3 starter template for NextJS",
  links: {
    twitter: "https://twitter.com/xxx",
    github: "https://github.com/xxx",
  },
}
