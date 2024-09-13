import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { ChevronsUpDown, Dot } from "lucide-react";
import { URLS } from "@/App";

const summaryLength = [
  {
    name: "25 words",
    value: "25",
  },
  {
    name: "50 words",
    value: "50",
  },
  {
    name: "75 words",
    value: "75",
  },
  {
    name: "100 words",
    value: "100",
  },
  {
    name: "150 words",
    value: "150",
  },
];

const gotoPage = (value, type) => {
  let url_obr = new URL(URLS.summarize);
  url_obr.searchParams.append("wordsnumber", type + " words");
  url_obr.searchParams.append("summarizationtext", value);
  url_obr.searchParams.append("dynamic_tool_id", 263);

  url_obr.searchParams.append("action", "custom_dynamic_tools_result");

  chrome.tabs.create({
    url: url_obr.toString(),
  });
};

const SummarizePage = ({ setContent }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [type, setType] = useState(localStorage.getItem("summarize") || "150");
  const [value, setValue] = useState("");

  useEffect(() => {
    localStorage.setItem("summarize", type);
  }, [type]);

  return (
    <div className="h-full">
      <Header setContent={setContent} title="Summarize" />

      <Separator className="bg-black/70" />

      <div className="relative max-h-[18.4375rem]">
        <div className="ablsolute left-0 top-0 flex justify-between items-center w-full h-[2.5rem]">
          <span className="w-1/3 text-center">In</span>
          <Separator orientation="vertical" className="bg-black/70" />
          <div className="grid gap-4 py-4 w-full">
            <Popover
              className="w-full"
              open={popoverOpen}
              onOpenChange={setPopoverOpen}
            >
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  role="combobox"
                  aria-expanded={popoverOpen}
                  className=" justify-between hover:bg-transparent"
                >
                  {type
                    ? summaryLength.find((item) => item.value === type)?.name
                    : "Select length..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0" align="start">
                <Command className="max-h-64 w-full">
                  {/* <CommandInput placeholder="Search" /> */}
                  <CommandList>
                    {/* <CommandEmpty>No results found.</CommandEmpty> */}
                    <CommandGroup className="w-full">
                      {summaryLength.map((item, index) => (
                        <CommandItem
                          key={index}
                          value={item.value}
                          onSelect={(currentValue) => {
                            setType(currentValue === type ? "" : currentValue);
                            setPopoverOpen(false);
                          }}
                        >
                          <Dot /> {item.name}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <Separator className="bg-black/70" />
        <div
          className="h-[15.9375rem] overflow-y-auto p-4"
          style={{ scrollbarWidth: "thin" }}
        >
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full h-full text-justify border-none outline-none"
            style={{
              overflow: "auto",
              resize: "none",
            }}
          />
        </div>
      </div>

      <div className="absolute bottom-0 flex justify-between items-center w-full h-[2.5rem] border-t border-t-black/70">
        <Button
          onClick={() => setContent("home")}
          className="w-1/2 hover:bg-transparent"
          variant="ghost"
        >
          Go Back
        </Button>
        <Separator orientation="vertical" className="bg-black/70" />
        <Button
          onClick={() => {
            gotoPage(value, type);
          }}
          className="w-1/2 hover:bg-transparent"
          variant="ghost"
        >
          Generate
        </Button>
      </div>
    </div>
  );
};

export default SummarizePage;
