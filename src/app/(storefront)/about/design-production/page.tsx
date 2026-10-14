import type { Metadata } from "next";

import { OfficialBrandArticleView } from "@/components/brand/official-brand-article";
import { officialDesignProduction } from "@/content/official-brand-content";

export const metadata: Metadata = {
  title: officialDesignProduction.title,
  description: officialDesignProduction.introduction[0],
};

export default function DesignProductionPage() {
  return <OfficialBrandArticleView article={officialDesignProduction} />;
}
