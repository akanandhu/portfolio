import Link from "next/link";
import { cn } from "../../lib/utils";
import SharedTransition from "../shared-transition";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Book } from "lucide-react";

function IntroCard({ className }: { className?: string }) {
  return (
    <Card
      className={cn(
        "minimal-card justify-between py-0",
        className
      )}
    >
      <CardContent className="flex h-full flex-col justify-between px-6 py-6 sm:px-7 sm:py-7">
        <div className="flex flex-col gap-5">
          <Badge
            variant="secondary"
            className="w-fit rounded-full px-3 py-1 text-[0.72rem] font-medium text-foreground"
          >
            👋 Hello
          </Badge>
          <div className="space-y-4">
            <SharedTransition name="vic-name">
              <h1 className="text-2xl leading-tight font-semibold text-balance text-foreground sm:text-3xl">
                Hi, I&apos;m Ananthakrishnan A
              </h1>
            </SharedTransition>
            <SharedTransition name="vic-title">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Software Engineer focused on modern web applications,
                frontend systems, and product quality.
              </p>
            </SharedTransition>
            <SharedTransition name="vic-summary">
              <div className="space-y-3 border-t border-border pt-5">
                <h2 className="text-xl font-semibold text-foreground">
                  About me
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  I thrive in fast-paced environments, delivering lean, user-centric solutions that drive growth. Whether it's a startup looking to validate an idea or an established company needing a robust web/mobile app, I bring speed, precision, and innovation to every project.
                </p>
              </div>
            </SharedTransition>
            <Button
              nativeButton={false}
              variant="secondary"
              size="lg"
              className="h-11 rounded-full bg-zinc-900 px-5 text-sm font-medium text-zinc-50 hover:bg-zinc-700"
              render={
                <Link href="/resume" transitionTypes={["navigation-forward"]}>
                  <Book className="size-4" strokeWidth={2.2} />
                  View my resume
                </Link>
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default IntroCard;