"use client";

import { pages, type Pages } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Book, Dot } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { useTheme } from "next-themes";

export function LeftNavbar(): React.ReactElement {
  const [currentPage, setCurrentPage] = useState(
    window.location.pathname ?? "",
  );
  const theme = useTheme();

  return (
    <div className="border-r-2  w-96 h-[100vh] ">
      <Accordion type="multiple">
        {Object.keys(pages)?.map((key, index) => {
          return (
            <AccordionItem key={index} value={index.toString()}>
              <div
                className={cn(" pl-12 pr-4 hover:underline-none relative", {
                  "hover:bg-slate-100":
                    theme.theme === "light" || theme.theme === "system",
                  "hover:bg-slate-800": theme.theme === "dark",
                })}
              >
                <Book className="absolute top-4 left-4"></Book>
                <AccordionTrigger>
                  {pages[key as keyof Pages].label}
                </AccordionTrigger>
              </div>
              <AccordionContent className="pl-8 flex flex-col gap-2 w-full">
                {pages[key as keyof Pages].items.map((item, index) => {
                  const isActive = currentPage === item.link;
                  return (
                    <div
                      className="w-full  px-4 flex  hover:underline underline-offset-4 "
                      key={index}
                    >
                      <Dot className="w-8"></Dot>
                      <Link
                        onClick={() => {
                          setCurrentPage(item.link);
                        }}
                        className={cn("break-all flex w-full", {
                          "font-bold underline": isActive,
                        })}
                        href={item.link}
                      >
                        {" "}
                        {item.label}
                      </Link>
                    </div>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
