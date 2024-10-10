"use client";

import React, { useState, useEffect, useRef, SetStateAction } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Input } from "./ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Upload, Send } from "lucide-react";

function FileUploadChat() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [parent] = useAutoAnimate();
  const router = useRouter();
  const searchParams = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [lastTypewrittenIndex, setLastTypewrittenIndex] = useState<number>();

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files) return;
    const file = files[0];
    if (file) {
      // Simulating file upload
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const uploadId = Math.random().toString(36).substr(2, 9);
      const currentTags: string[] = searchParams.get("tags")
        ? (searchParams.get("tags")?.split(",") as string[])
        : [];
      const newTags = [...currentTags, uploadId];
      router.push(`?tags=${newTags.join(",")}`);
      setIsChatOpen(true);
      addMessage(
        "bot",
        `File "${file.name}" uploaded successfully! How can I help you?`
      );
    }
  };

  const addMessage = (role: string, content: string) => {
    setMessages((prev) => [...prev, { role, content }]);
    if (role === "bot") {
      setLastTypewrittenIndex(messages.length);
    }
  };

  const handleSend = async () => {
    if (input.trim()) {
      addMessage("user", input);
      setInput("");
      setIsTyping(true);
      // Simulating bot response
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsTyping(false);
      addMessage(
        "bot",
        "Thank you for your message. How else can I assist you?"
      );
    }
  };

  const TypewriterEffect = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 50);
        return () => clearTimeout(timer);
      }
    }, [currentIndex, text]);

    return <span>{displayText}</span>;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 w-full max-w-none">
      {!isChatOpen && (
        <div className="text-center">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
          />
          <Button
            onClick={() => fileInputRef.current?.click()}
            size="lg"
            className="animate-pulse hover:animate-none"
          >
            <Upload className="mr-2 h-5 w-5" /> Upload File
          </Button>
        </div>
      )}
      {isChatOpen && (
        <Card className="w-full mx-auto">
          <CardHeader>
            <CardTitle>Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              ref={parent}
              className="space-y-4 max-h-[400px] overflow-y-auto"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`rounded-lg p-2 max-w-[80%] ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {message.role === "bot" &&
                    index === lastTypewrittenIndex ? (
                      <TypewriterEffect text={message.content} />
                    ) : (
                      message.content
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg p-2">
                    <span className="animate-pulse">Typing...</span>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex w-full space-x-2">
              <Input
                type="file"
                className="hidden"
                id="chat-file-upload"
                onChange={handleFileUpload}
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  document.getElementById("chat-file-upload")?.click()
                }
              >
                <Upload className="h-4 w-4" />
              </Button>
              <Input
                value={input}
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                  setInput(e.target.value)
                }
                placeholder="Type your message..."
                className="flex-grow"
                onKeyPress={(e: { key: string }) =>
                  e.key === "Enter" && handleSend()
                }
              />
              <Button onClick={handleSend}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}

export default FileUploadChat;
