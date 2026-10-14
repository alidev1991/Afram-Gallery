import type { Metadata } from "next";

import { OfficialBrandArticleView } from "@/components/brand/official-brand-article";
import { officialBrandStory } from "@/content/official-brand-content";

export const metadata: Metadata = {
  title: officialBrandStory.title,
  description: officialBrandStory.introduction[1],
};

export default function BrandStoryPage() {
  return <OfficialBrandArticleView article={officialBrandStory} />;
}
