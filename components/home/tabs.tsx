import { translations as t } from "@/utils/translations";
import Image from "next/image";

export default function Tabs() {
  const tabs = [
    {
      title: t.flightDetails,
      icon: "./icons/plane.svg",
    },
    {
      title: t.termsAndConditions,
      icon: "./icons/plane.svg",
    },
  ];
  return (
    <div>
      {tabs.map((tab) => (
        <div key={tab.title}>
          <Image alt="tab icon" width={20} height={17} src={tab.icon} />
          {tab.title}
        </div>
      ))}
    </div>
  );
}
