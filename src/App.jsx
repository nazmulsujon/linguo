import { ChevronRight } from "lucide-react";
import { Separator } from "./components/ui/separator";
import CorrectPage from "./components/correct/CorrectPage";
import { useState } from "react";

function App() {
  const contentLists = [
    "correct",
    "translate",
    "summarize",
    "enhance",
    "about",
  ];
  const [content, setContent] = useState("home");

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative h-[400px] w-[300px] m-auto border-2 border-black/70">
        {content === "home" && (
          <div>
            <div className="flex flex-col">
              <img className="w-24 mx-auto" src="/logo.jpg" alt="logo" />
              <h2 className="text-center text-lg font-bold text-blue-800 mb-1">
                LINGUO
              </h2>
            </div>
            <Separator className="bg-black/70" />
            <ul>
              {contentLists.map((list, index) => (
                <li key={index} className="flex justify-between p-4">
                  <p className="font-bold capitalize">{list}</p>
                  <button
                    onClick={() => {
                      setContent(list);
                    }}
                  >
                    <ChevronRight />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {content === "correct" && <CorrectPage setContent={setContent} />}
        {content === "translate" && <TranslatePage setContent={setContent} />}
        {content === "summarize" && <SummarizePage setContent={setContent} />}
        {content === "enhance" && <EnhancePage setContent={setContent} />}
        {content === "about" && <AboutPage setContent={setContent} />}
      </div>
    </div>
  );
}

export default App;
