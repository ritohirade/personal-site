import React from "react";
import {
  AWARD,
  QUALIFICATION,
  SCHOOL,
  SPEAKER,
  WORK,
} from "@/constants/resume";
import { SectionContainer } from "@/components/sectionContainer";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <div id="Work" className="text-xl mt-3 mb-5">
        職歴
      </div>
      {WORK.map((item, index) => {
        if (item.intern === "<インターン経験>") {
          return <div className="mt-6 mb-3 mt-7">{item.intern}</div>;
        }
        const marginTopClass = index > 0 ? "mt-4" : "";
        return (
          <SectionContainer className={marginTopClass} key={item.companyName}>
            <div className="flex justify-between">
              <div>
                <div className="text-lg">{item.companyName}</div>
                <div className="text-sm text-custom-gray mt-2">
                  {item.jobTitle}
                </div>
                <div className="text-sm text-custom-gray mt-0.5">
                  {item.period}
                </div>
              </div>
            </div>
            <div className="mt-2 text-sm">{item.companyProf}</div>
            <div className="mt-2 text-sm whitespace-pre-line">{item.did}</div>
            {item.techStack && (
              <div className="text-sm font-bold mt-2">技術スタック</div>
            )}
            <div className="text-sm mt-2">
              {item.techStack &&
                item.techStack.map((tech) => <div key={tech}>・{tech}</div>)}
            </div>
          </SectionContainer>
        );
      })}
      <div id="School" className="text-xl mb-3 mt-7">
        学歴
      </div>
      {SCHOOL.map((item, index) => {
        const marginTopClass = index > 0 ? "mt-4" : "";
        return (
          <SectionContainer className={marginTopClass} key={item.name}>
            <div className="text-lg">{item.name}</div>
            <div className="text-sm text-custom-gray mt-2">{item.bechelor}</div>
            <div className="text-sm text-custom-gray mt-0.5">{item.period}</div>
          </SectionContainer>
        );
      })}
      <div id="Qualification" className="text-xl mb-3 mt-7">
        資格
      </div>
      {QUALIFICATION.map((item, index) => {
        const marginTopClass = index > 0 ? "mt-4" : "";
        return (
          <SectionContainer className={marginTopClass} key={item.name}>
            <div className="text-lg">{item.name}</div>
            <div className="text-sm text-custom-gray mt-2">{item.date}</div>
            {item.url && (
              <Link
                className="text-sm text-custom-gray mt-0.5 underline"
                href={item.url}
                target={item.url?.startsWith("https://") ? "_blank" : "_self"}
                rel={
                  item.url?.startsWith("https://") ? "noreferrer" : undefined
                }
              >
                Credential URL
              </Link>
            )}
          </SectionContainer>
        );
      })}
      <div id="Award" className="text-xl mb-3 mt-7">
        表彰
      </div>
      {AWARD.map((item, index) => {
        const marginTopClass = index > 0 ? "mt-4" : "";
        return (
          <SectionContainer className={marginTopClass} key={item.name}>
            <div className="text-lg">{item.name}</div>
            <div className="text-sm text-custom-gray mt-2">{item.date}</div>
            <div className="text-sm mt-0.5">{item.description}</div>
          </SectionContainer>
        );
      })}
      <div id="Speaker" className="text-xl mb-3 mt-7">
        登壇
      </div>
      {SPEAKER.map((item) => {
        const marginBottomClass = "mb-[120px]";
        return (
          <SectionContainer className={marginBottomClass} key={item.name}>
            <div className="text-lg">{item.name}</div>
            <div className="text-sm text-custom-gray mt-2">{item.date}</div>
            <div className="text-sm mt-0.5">{item.description}</div>
          </SectionContainer>
        );
      })}
    </>
  );
}
