import React, { useState } from "react";
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

const interestDescriptors = [
  {
    name: "Complelling",
    value: "complelling",
  },
  {
    name: "Engaging",
    value: "engaging",
  },
  {
    name: "Absorbing",
    value: "absorbing",
  },
  {
    name: "Interesting",
    value: "interesting",
  },
];

const EnhancePage = ({ setContent }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [value, setValue] = useState("complelling");
  console.log("value", value);
  return (
    <div className="h-full">
      <Header title="Enhance" />

      <Separator className="bg-black/70" />

      <div className="relative max-h-[295px]">
        <div className="ablsolute left-0 top-0 flex justify-between items-center w-full h-[40px]">
          <span className="w-[40%] text-center">Make it more</span>
          <Separator orientation="vertical" className="bg-black/70" />
          <div className="grid gap-4 py-4 w-[60%]">
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  role="combobox"
                  aria-expanded={popoverOpen}
                  className="w-full justify-between hover:bg-transparent"
                >
                  {value
                    ? interestDescriptors.find((item) => item.value === value)
                        ?.name
                    : "Select..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0" align="start">
                <Command className="max-h-64 w-44">
                  <CommandInput placeholder="Search" />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      {interestDescriptors.map((item, index) => (
                        <CommandItem
                          key={index}
                          value={item.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
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
          className="max-h-[255px] overflow-y-auto p-4"
          style={{ scrollbarWidth: "thin" }}
        >
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            sapiente veritatis accusantium tempore reiciendis doloremque harum,
            officiis Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vero sapiente veritatis accusantium tempore reiciendis doloremque
            harum, officiis Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Vero sapiente veritatis accusantium tempore reiciendis
            doloremque harum, officiis Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vero sapiente veritatis accusantium tempore
            reiciendis doloremque harum, officiis
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 flex justify-between items-center w-full h-[40px] border-t border-t-black/70">
        <Button
          onClick={() => setContent("home")}
          className="w-1/2 hover:bg-transparent"
          variant="ghost"
        >
          Go Back
        </Button>
        <Separator orientation="vertical" className="bg-black/70" />
        <Button className="w-1/2 hover:bg-transparent" variant="ghost">
          Generate
        </Button>
      </div>
    </div>
  );
};

export default EnhancePage;
