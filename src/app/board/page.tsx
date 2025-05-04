"use client";
import MeetTheBoard from "@/components/board/meettheboard";
import BoardCards from "@/components/board/cards";
import Sidebar from "@/components/board/sidebar";
import { useRef } from "react";

type SectionRefs = {
  [key: string]: React.RefObject<HTMLDivElement | null>;
};

const Page = () => {
  const sectionRefs: SectionRefs = {
    "ACM BOARD": useRef<HTMLDivElement | null>(null),
    "ACM SPARK LEADS": useRef<HTMLDivElement | null>(null),
    "ACM CREATE LEADS": useRef<HTMLDivElement | null>(null),
    "ACM FORGE LEADS": useRef<HTMLDivElement | null>(null),
    "ACM DAS LEADS": useRef<HTMLDivElement | null>(null),
  };

  return (
    <div className="flex flex-col gap-10">
      <MeetTheBoard />
      <BoardCards sectionRefs={sectionRefs} />
      <Sidebar sectionRefs={sectionRefs} />
    </div>
  );
};

export default Page;
