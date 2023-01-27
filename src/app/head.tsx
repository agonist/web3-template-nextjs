import { NextSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "../config/next-seo.config";

export default function Head() {
  return <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />;
}
