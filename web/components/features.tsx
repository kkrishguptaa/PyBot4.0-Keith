import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, FileText, Search } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="font-display w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-20">
        <div className="items-center gap-6 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-in fade-in slide-in-from-bottom-3 duration-1000 delay-150">
                Unlock the Power of Your PDFs
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-in fade-in slide-in-from-bottom-3 duration-1000 delay-150">
                Nocturna Chatbot revolutionizes how you interact with your PDF
                documents. Explore, analyze, and extract insights with ease.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <Card className="animate-in fade-in slide-in-from-left-3 duration-1000 delay-150">
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <MessageSquare className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold">Text-Based Q&A</h3>
                  <p className="text-sm text-gray-500 text-center">
                    Ask questions and get answers directly from your PDF
                    content.
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-in fade-in slide-in-from-right-3 duration-1000 delay-150">
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <FileText className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold">Summarization</h3>
                  <p className="text-sm text-gray-500 text-center">
                    Generate concise summaries of sections or entire chapters.
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-in fade-in slide-in-from-left-3 duration-1000 delay-150">
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Search className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold">Section-Based Q&A</h3>
                  <p className="text-sm text-gray-500 text-center">
                    Focus on specific sections for in-depth questions and
                    detailed answers.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="w-full sm:w-auto">
                Try Nocturna Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
