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
import { ChevronsUpDown } from "lucide-react";
import { URLS } from "@/App";

// const languages = [
//   "English",
//   "Spanish",
//   "French",
//   "German",
//   "Portuguese",
//   "Chinese (Simplified)",
//   "Chinese (Traditional)",
//   "Japanese",
//   "Italian",
//   "Russian",
//   "Arabic",
//   "Dutch",
//   "Korean",
//   "Swedish",
//   "Polish",
//   "Norwegian",
//   "Danish",
//   "Finnish",
//   "Turkish",
//   "Hindi",
//   "Indonesian",
// ];

// const languages_code = {
//   English: "English",
//   Spanish: " Spanish",
//   French: " French",
//   German: " German",
//   Portuguese: " Portuguese",
//   "Chinese (Simplified)": " Chinese (Simplified)",
//   "Chinese (Traditional)": " Chinese (Traditional)",
//   Japanese: " Japanese",
//   Italian: "Italian",
//   Russian: " Russian",
//   Arabic: " Arabic",
//   Dutch: " Dutch",
//   Korean: " Korean",
//   Swedish: " Swedish",
//   Polish: " Polish",
//   Norwegian: " Norwegian",
//   Danish: " Danish",
//   Finnish: " Finnish",
//   Turkish: " Turkish",
//   Hindi: " Hindi",
//   Indonesian: " Indonesian",
// };

const languages = [
  {
    name: "English",
    value: " English",
  },
  {
    name: "Spanish",
    value: " Spanish",
  },
  {
    name: "French",
    value: " French",
  },
  {
    name: "German",
    value: " German",
  },
  {
    name: "Portuguese",
    value: " Portuguese",
  },
  {
    name: "Chinese (Simplified)",
    value: " Chinese (Simplified)",
  },
  {
    name: "Chinese (Traditional)",
    value: " Chinese (Traditional)",
  },
  {
    name: "Japanese",
    value: " Japanese",
  },
  {
    name: "Italian",
    value: "Italian",
  },
  {
    name: "Russian",
    value: " Russian",
  },
  {
    name: "Arabic",
    value: " Arabic",
  },
  {
    name: "Dutch",
    value: " Dutch",
  },
  {
    name: "Korean",
    value: " Korean",
  },
  {
    name: "Swedish",
    value: " Swedish",
  },
  {
    name: "Polish",
    value: " Polish",
  },
  {
    name: "Norwegian",
    value: " Norwegian",
  },
  {
    name: "Danish",
    value: " Danish",
  },
  {
    name: "Finnish",
    value: " Finnish",
  },
  {
    name: "Turkish",
    value: " Turkish",
  },
  {
    name: "Hindi",
    value: " Hindi",
  },
  {
    name: "Indonesian",
    value: " Indonesian",
  },
];

const gotoPage = (value, type) => {
  let url_obr = new URL(URLS.translate);
  url_obr.searchParams.append("fromlanguage", "English");
  url_obr.searchParams.append("tolanguage", type);
  url_obr.searchParams.append("texttranslate", value);
  url_obr.searchParams.append("dynamic_tool_id", 165);
  url_obr.searchParams.append("action", "custom_dynamic_tools_result");

  chrome.tabs.create({
    url: url_obr.toString(),
  });
};

const TranslatePage = ({ setContent }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [type, setType] = useState(localStorage.getItem("language") || "");
  const [value, setValue] = useState("");

  useEffect(() => {
    localStorage.setItem("language", type);
  }),
    [type];

  return (
    <div className="h-full">
      <Header setContent={setContent} title="Translate" />

      <Separator className="bg-black/70" />

      <div className="relative max-h-[18.4375rem]">
        <div className="ablsolute left-0 top-0 flex justify-between items-center w-full h-[2.5rem]">
          <span className="w-1/3 text-center">To</span>
          <Separator orientation="vertical" className="bg-black/70" />
          <div className="grid gap-4 py-4 w-full">
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  role="combobox"
                  aria-expanded={popoverOpen}
                  className="w-full justify-between hover:bg-transparent"
                >
                  {type
                    ? languages.find((item) => item.value === type)?.name
                    : "Select language..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0" align="start">
                <Command className="max-h-64">
                  <CommandInput placeholder="Search language" />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      {languages.map((item, index) => (
                        <CommandItem
                          key={index}
                          value={item.value}
                          onSelect={(currentValue) => {
                            console.log("currentValue", currentValue);
                            setType(currentValue === type ? "" : item.value);
                            setPopoverOpen(false);
                          }}
                        >
                          {item.name}
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

export default TranslatePage;
