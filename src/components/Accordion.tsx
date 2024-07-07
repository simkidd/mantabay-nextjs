"use client";
import { FAQItem, faqs } from "@/data/faqsData";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

interface AccordionItemProps {
  item: FAQItem;
  index: number;
  activeIndex: number | null;
  onToggle: (index: number) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  index,
  activeIndex,
  onToggle,
}) => {
  return (
    <div className="border-b border-[#0000001A]">
      <div
        className={`lg:text-2xl text-xl font-inter font-semibold flex items-center justify-between cursor-pointer py-6 min-h-14 ${
          activeIndex === index ? "text-primary-500" : ""
        }`}
        onClick={() => onToggle(index)}
      >
        <div className="w-[95%]">{item?.question}</div>
        <PlusCircleIcon
          className={`text-primary-500 size-12 lg:size-16 transform transition-transform duration-300 ${
            activeIndex === index ? "rotate-45" : ""
          }`}
        />
      </div>
      <div
        className={`accordion-body ${
          activeIndex === index ? "max-h-screen" : "max-h-0"
        }`}
        style={{ overflow: "hidden", transition: "max-height 0.5s ease-in-out" }}
      >
        <div className="text-base font-inter leading-6 pb-6 w-[95%]">
          {item?.answer}
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full max-w-[800px] mx-auto">
      {faqs.map((item, i) => (
        <AccordionItem
          key={i}
          item={item}
          index={i}
          activeIndex={activeIndex}
          onToggle={toggleAccordion}
        />
      ))}
    </div>
  );
};

export default Accordion;
