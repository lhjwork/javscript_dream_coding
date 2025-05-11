import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // 수동으로 정의된 사이드바
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro", // 문서 ID (docs/intro.md)
      label: "시작하기", // 사이드바에 표시될 이름
    },
    {
      type: "category",
      label: "기본 튜토리얼",
      items: [
        "tutorial-basics/create-a-document", // 문서 ID
        "tutorial-basics/create-a-page",
        "tutorial-basics/deploy-your-site",
      ],
    },
    {
      type: "category",
      label: "고급 튜토리얼",
      items: ["tutorial-extras/manage-docs-versions", "tutorial-extras/translate-your-site"],
    },
  ],
};

export default sidebars;
