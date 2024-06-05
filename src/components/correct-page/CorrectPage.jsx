import React from "react";
import Header from "../common/Header";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const CorrectPage = ({ setContent }) => {
  return (
    <div className="h-full">
      <Header title="Correct" />

      <Separator className="bg-black/70" />

      <div
        className="max-h-[295px] overflow-y-auto p-4"
        style={{ scrollbarWidth: "thin", height: "295px" }}
      >
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente
          veritatis accusantium tempore reiciendis doloremque harum, officiis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente
          veritatis accusantium tempore reiciendis doloremque harum, officiis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente
          veritatis accusantium tempore reiciendis doloremque harum, officiis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente
          veritatis accusantium tempore reiciendis doloremque harum, officiis
        </p>
      </div>

      <div className="absolute bottom-0 flex justify-between items-center w-full h-[40px] border-t border-t-black/70">
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
        <Button className="w-1/2 hover:bg-transparent" variant="ghost">
          Generate
        </Button>
      </div>
    </div>
  );
};

export default CorrectPage;
