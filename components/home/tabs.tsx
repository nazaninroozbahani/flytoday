import { translations as t } from "@/utils/translations";
import Image from "next/image";
import { useState } from "react";
import DetailsTabContent from "./details-tab-content";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      id: 0,
      title: t.flightDetails,
      icon: "/icons/plane.svg",
      content: <DetailsTabContent />,
    },
    {
      id: 1,
      title: t.termsAndConditions,
      icon: "/icons/plane.svg", // I could NOT export terms and conditions icon in zeplin!
      content: null,
    },
  ];

  const onTabChange = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className="p-4 pb-0 flex-1">
      <div className="flex border-b border-[#eeeeee]">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex items-center h-10 px-3 gap-2 text-[#8d8d8d] rounded-t cursor-pointer text-sm ${
              activeTab === tab.id ? "bg-flyblue-500 text-white" : ""
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            <Image
              alt="tab icon"
              width={20}
              height={17}
              src={tab.icon}
              color="red"
            />
            {tab.title}
          </div>
        ))}
      </div>
      {tabs.filter((tab) => tab.id === activeTab)[0].content}
    </div>
  );
}
