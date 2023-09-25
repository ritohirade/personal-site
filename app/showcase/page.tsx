import React from "react";
import WORK from "@/constants/showcase";
import { SectionContainer } from "@/components/sectionContainer";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <div id="Work" className="text-xl mt-3 mb-5">
        プライベート作品
      </div>
      {WORK.map((item, index) => {
        const marginTopClass = index > 0 ? "mt-4" : "";
        const isLastItem = index === WORK.length - 1;
        const marginBottomClass = isLastItem ? "mb-[120px]" : "";
        const combinedClass = `${marginTopClass} ${marginBottomClass}`.trim();
        return (
          <SectionContainer className={combinedClass} key={item.serviceName}>
            <div className="text-lg">{item.serviceName}</div>
            <Link
              className="text-sm text-custom-gray mt-2 underline"
              href={item.url}
              target={item.url?.startsWith("https://") ? "_blank" : "_self"}
              rel={item.url?.startsWith("https://") ? "noreferrer" : undefined}
            >
              {item.url}
            </Link>
            <div className="text-sm mt-2">{item.description}</div>
            {item.code && (
              <Link
                key={item.code}
                className="text-sm text-white mt-2 underline"
                href={item.code}
                target={item.code?.startsWith("https://") ? "_blank" : "_self"}
                rel={
                  item.code?.startsWith("https://") ? "noreferrer" : undefined
                }
              >
                {item.code}
              </Link>
            )}
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
    </>
  );
}
