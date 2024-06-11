import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Separator } from "./components/ui/separator";
import CorrectPage from "./components/correct-page/CorrectPage";
import TranslatePage from "./components/translate-page/TranslatePage";
import SummarizePage from "./components/summarize-page/SummarizePage";
import EnhancePage from "./components/enhance-page/EnhancePage";

export const URLS = {
  correct: "https://linguo-ai.com/our-services/correct/",
  translate: "https://linguo-ai.com/our-services/translate/",
  summarize: "https://linguo-ai.com/our-services/summarize/",
  enhance: "https://linguo-ai.com/our-services/enhance/",
  about: "https://linguo-ai.com/about-us/",
};

const gotoPage = (value) => {
  chrome.tabs.create({
    url: URLS[value],
  });
};
const contentLists = ["correct", "translate", "summarize", "enhance", "about"];
function App() {
  const [content, setContent] = useState("home");

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative h-[25rem] w-[18.75rem] m-auto border border-black/70">
        {content === "home" && (
          <div>
            <div className="flex flex-col mt-2">
              <img className="w-32 my-1 mx-auto" src="/logo.png" alt="logo" />
              {/* <h2 className="text-center text-lg tracking-[0.125rem] font-bold text-blue-800 mb-1">
                LINGUO
              </h2> */}
            </div>

            <ul>
              {contentLists.map((list, index) => (
                <li key={index} className="flex justify-between p-4">
                  <p
                    onClick={(e) => gotoPage(list)}
                    className="font-bold cursor-pointer capitalize"
                  >
                    {list}
                  </p>
                  {list != "about" && (
                    <button
                      onClick={() => {
                        setContent(list);
                      }}
                    >
                      <ChevronRight />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        {content === "correct" && <CorrectPage setContent={setContent} />}
        {content === "translate" && <TranslatePage setContent={setContent} />}
        {content === "summarize" && <SummarizePage setContent={setContent} />}
        {content === "enhance" && <EnhancePage setContent={setContent} />}
      </div>
    </div>
  );
}

export default App;
