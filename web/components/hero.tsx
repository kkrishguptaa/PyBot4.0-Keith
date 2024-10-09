import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 text-center">
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-3 duration-1000">
        PyBot4.0
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-3 duration-1000 delay-150">
        The next generation AI assistant for Python developers
      </p>
      <Button
        size="lg"
        className="rounded-full text-lg animate-in fade-in slide-in-from-bottom-3 duration-1000 delay-300"
      >
        Get Started
      </Button>

      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-50 blur-3xl animate-pulse duration-5000 -z-50"></div>
    </div>
  );
}
