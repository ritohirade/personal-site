const WORK = [
  {
    serviceName: "ReportAI",
    url: "https://reportai.jp",
    description:
      "OpenAIのAPI（GPT-4）を使用し、学生のレポート作成の支援を行うWebアプリを開発。先端の技術を使って、人に使われるサービスを作りたいという思いで作り始めた。ユーザーのヒアリングなどを通して改善をしたり、SNSでショート動画の投稿をしたりした結果、有料サービスとしているが、利用者はトータル100人を超えている。",
    techStack: ["React.js", "TypeScript", "styled-components", "Firebase"],
  },
  {
    serviceName: "プロフィールサイト（本サイト）",
    url: "https://www.ritohirade.com",
    description:
      "SSGで作成した個人紹介サイト。Next.js v13で導入されたApp Routerを使って作成。Github ActionsやS3を使用したデプロイ、CloudFrontによるCDNの配信などの技術を取り入れた。ソースコードを公開している。",
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
      "OpenAIが提供しているGPT-3.5-turboのAPIを使用し（現在はGPT-4を使用）、LINEでAIとチャットできるサービスを台湾向けに開発。マーケティング活動も行なったが、ユーザー数は伸びなかった。",
    techStack: ["Node.js", "TypeScript", "AWS Lambda"],
  },
];

export default WORK;
