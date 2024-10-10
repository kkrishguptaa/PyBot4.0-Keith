import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export function Hero() {
  return (
    <div className="font-display relative z-10 flex flex-col items-start justify-center min-h-[calc(100vh-80px)] px-20 text-center">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-3 duration-1000">
        Nocturna
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-3 duration-1000 delay-150 text-left">
        Ask anything, learn everything—Nocturna Chatbot brings your PDFs to
        life! 🌙📘
      </p>
      <Button
        size="lg"
        className="rounded-full text-lg animate-in fade-in slide-in-from-bottom-3 duration-1000 delay-300"
      >
        Chat with Nocturna <ArrowRightIcon className="text-xl m-4 font-bold" />
      </Button>

      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-50 blur-3xl animate-pulse duration-5000 -z-50"></div>
    </div>
  );
}
