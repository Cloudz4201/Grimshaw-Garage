import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, EyeOff } from "lucide-react";

const STORAGE_KEY = "chatHidden";

const ChatToggle = () => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  // Initialize from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const initial = saved === "true";
      setIsHidden(initial);
      document.documentElement.toggleAttribute("data-chat-hidden", initial);
    } catch {
      // noop
    }
  }, []);

  const toggleChatVisibility = () => {
    const next = !isHidden;
    setIsHidden(next);
    document.documentElement.toggleAttribute("data-chat-hidden", next);
    try {
      localStorage.setItem(STORAGE_KEY, String(next));
    } catch {
      // noop
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[2147483647]">
      <Button
        onClick={toggleChatVisibility}
        size="lg"
        className="bg-slate-800 hover:bg-slate-700 text-white shadow-lg rounded-full px-4 py-6 flex items-center gap-2"
      >
        {isHidden ? <MessageCircle className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
        <span className="hidden sm:inline">{isHidden ? "Show Chat" : "Hide Chat"}</span>
      </Button>
    </div>
  );
};

export default ChatToggle;

