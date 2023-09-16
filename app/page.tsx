import React from "react";
import { SectionContainer } from "@/components/sectionContainer";
import { NAME, PROFILE, SKILLS, SNS } from "@/constants/home";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="mt-10 mb-7">
        <div className="text-xl">{NAME.jp}</div>
        <div className="text-sm text-custom-gray mt-0.5">{NAME.eng}</div>
      </div>
      <SectionContainer>
        <p className="text-sm">{PROFILE}</p>
      </SectionContainer>
      <div className="mt-7 mb-2">Skills</div>
      <SectionContainer>
        <div className="space-y-1.5">
          {SKILLS.map((item) => {
            return (
              <div className="flex">
                <div key={item.label} className="text-sm w-24">
                  {item.label}
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className={`w-4 h-4 rounded-full mr-1 ${
                        index < item.level ? "bg-white" : "bg-skills-gray"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </SectionContainer>
      <div className="mt-7 mb-2">SNS</div>
      <SectionContainer>
        <div className="flex space-x-3">
          {SNS.map((item) => {
            return (
              <>
                <Link
                  key={item.label}
                  className="w-5 h-5"
                  href={item.href}
                  target={
                    item.href?.startsWith("https://") ? "_blank" : "_self"
                  }
                  rel={
                    item.href?.startsWith("https://") ? "noreferrer" : undefined
                  }
                >
                  {item.icon}
                </Link>
              </>
            );
          })}
        </div>
      </SectionContainer>
    </main>
  );
}
