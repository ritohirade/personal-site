const WORK = [
  {
    serviceName: "ReportAI",
    url: "https://reportai.jp",
    description:
      "GPT-3.5-turboのAPIを使用し（現在はGPT-4）、学生のレポート作成の支援を行うWebアプリを開発。有料サービスとしているが、利用者はトータル100人を超えている。",
    techStack: ["React.js", "TypeScript", "styled-components", "Firebase"],
  },
  {
    serviceName: "プロフィールサイト",
    url: "https://reportai.jp",
    description:
      "SSGのサイト。 (lighthouse score90点以上) App Router機能や、S3へのデプロイ、CloudFrontによるCDNの配信などの技術を取り入れた。他言語対応をしている",
    techStack: [
      "Next.js",
      "TypeScript",
      "tailwind + Radix UI",
      "Amazon S3",
      "CloudFront",
    ],
  },
  {
    serviceName: "LINE AI Chat",
    url: "https://liff.line.me/1645278921-kWRPP32q/?accountId=ai_linechat",
    description:
      "GPT-3.5-turboのAPIを使用し（現在はGPT-4）、LINEでAIと会話できるサービスを台湾向けに開発。ユーザー数は伸びなかった。",
    techStack: ["Node.js", "TypeScript", "AWS Lambda"],
  },
];

export default WORK;
