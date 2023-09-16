import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";

export const NAME = {
  jp: "平出 理斗",
  eng: "Rito Hirade",
};

export const PROFILE =
  "大学在学中に、ポーラ・オルビスグループのトリコ株式会社や、株式会社LayerXなどのスタートアップ企業でインターンとして働いた後、新卒でアバナード株式会社に入社。フロントエンドやバックエンドの設計・開発を担当している。";

export const SKILLS = [
  { label: "HTML", level: 4 },
  { label: "CSS", level: 4 },
  { label: "JavaScript", level: 3 },
  { label: "TypeScript", level: 3 },
  { label: "React.js", level: 3 },
  { label: "C#", level: 2 },
  { label: "Next.js", level: 2 },
];

export const SNS = [
  {
    label: "Facebook",
    icon: <SiFacebook className="h-5 w-5" />,
    href: "https://www.facebook.com/hiraderito",
  },
  {
    label: "LinkedIn",
    icon: <SiLinkedin className="h-5 w-5" />,
    href: "https://www.linkedin.com/in/ritohirade/",
  },
  {
    label: "Github",
    icon: <SiGithub className="h-5 w-5" />,
    href: "https://github.com/ritohirade",
  },
];
