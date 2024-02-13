"use client"

import { pages } from "@/lib/data"; 
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import {  Book,  Dot } from "lucide-react";
  import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
   

export function LeftNavbar(): JSX.Element {
    const [currentPage , setCurrentPage]  =  useState(window.location.pathname ?? "") 
    
    return (
      <div className='border-r-2 w-80 h-[100vh] '>
        <Accordion type="multiple"  >
          {pages?.map( (item , index) => {
            return (
              <AccordionItem key={index} value={index.toString()}>
                <div className="hover:bg-slate-100 pl-12 pr-4 hover:underline-none relative">
                  <Book className="absolute top-4 left-4"></Book>
                  <AccordionTrigger>
                    {item.label}
                  </AccordionTrigger>
                </div>
                <AccordionContent className="pl-8">
                  {item.items.map((item, index) => {
                    const isActive = currentPage === item.link ? true : false
                    return (
                        <div 
                    className="w-max px-2 flex  hover:underline underline-offset-4 hover:text-black"
                    key={index} >
                      <Dot></Dot>
                      <Link 
                      onClick={ () => setCurrentPage(item.link)}
                      className={cn("" ,{ "font-bold underline" : isActive } )}
                      href={item.link}>{item.name}</Link>
                    </div>
                    )
                  }
                  )}
                </AccordionContent>
              </AccordionItem>
            );
          } )}
        </Accordion>
      </div>
    )
  }
  