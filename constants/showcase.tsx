const WORK = [
  {
    serviceName: "ReportAI",
    url: "https://reportai.jp",
    description:
      "OpenAIのAPI（GPT-4）を使用し、学生のレポート作成の支援を行うWebアプリを開発。先端の技術を使って、人に使われるサービスを作りたいという思いで作り始めた。ユーザーのヒアリングなどを通して改善をしたり、SNSでショート動画の投稿をした結果、有料サービスとしているが、利用者はトータル100人を超えている。",
    techStack: ["React.js", "TypeScript", "styled-components", "Firebase"],
  },
  {
    serviceName: "プロフィールサイト",
    url: "https://ritohirade.com",
    description:
      "SSGで作成した個人紹介サイト。Next.js v13で導入されたApp Routerや、S3へのデプロイ、CloudFrontによるCDNの配信などの技術を取り入れた。ソースコードを公開している。",
    code: "https://github.com/ritohirade/personal-site",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind + Radix UI",
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
