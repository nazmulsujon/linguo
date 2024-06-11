import React from "react";
import Header from "../common/Header";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { URLS } from "@/App";

const gotoPage = (value, type) => {
  let url_obr = new URL(URLS.correct);
  url_obr.searchParams.append("textcorrect", value);
  url_obr.searchParams.append("dynamic_tool_id", 273);
  url_obr.searchParams.append("action", "custom_dynamic_tools_result");
  chrome.tabs.create({
    url: url_obr.toString(),
  });
};

const CorrectPage = ({ setContent }) => {
  const [value, setValue] = React.useState("");
  return (
    <div className="h-full">
      <Header setContent={setContent} title="Correct" />

      <Separator className="bg-black/70" />

      <div
        className="h-[18.4375rem] overflow-y-auto p-4"
        style={{ scrollbarWidth: "thin", height: "18.4375rem" }}
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

      <div className="absolute bottom-0 flex justify-between items-center w-full h-[2.5rem] border-t border-t-black/70">
        <Button
          className="w-1/2 hover:bg-transparent"
          variant="ghost"
          onClick={() => {
            setContent("home");
          }}
        >
          Go Back
        </Button>
        <Separator orientation="vertical" className="bg-black/70" />
        <Button
          onClick={() => {
            gotoPage(value);
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

export default CorrectPage;
