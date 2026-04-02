import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const work = [
  {
    title: "Fintech & Financial Systems",
    role: "Frontend Engineer",
    period: "Product Development",
    description:
      "Built and scaled financial workflows similar to Zoho Books, including invoices, credit notes, purchase bills, and expense tracking with a focus on accuracy and usability.",
  },
  {
    title: "E-commerce & Payment Integrations",
    role: "Frontend & Integration",
    period: "Multiple Projects",
    description:
      "Implemented seamless checkout experiences with payment gateway integrations, ensuring reliability, security, and smooth transaction flows.",
  },
  {
    title: "Automobile Platforms (MeraCars)",
    role: "Full-stack Engineer",
    period: "Recent Work",
    description:
      "Developed car evaluation systems, auction platforms, and automated report generation tools to streamline vehicle inspection and dealer workflows.",
  },
  {
    title: "Maritime Tech (Navicater)",
    role: "Full-stack & Mobile Developer",
    period: "Recent Work",
    description:
      "Worked across mobile, web, and backend systems for ship employment management, file hierarchy systems, and social platforms for mariners.",
  },
];

export function ResumeCard({ className }: { className?: string }) {
  return (
    <section className={cn("group/card relative minimal-card p-6 sm:p-7", className)}>
      <p className="text-sm font-medium text-muted-foreground">Selected work</p>
      <Link
        transitionTypes={["navigation-forward"]}
        href="/projects"
        className="absolute right-5 top-5 inline-flex size-8 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="View projects"
      >
        <ArrowUpRight className="size-4" strokeWidth={2.2} />
      </Link>
      <div className="mt-6 space-y-5">
        {work.map((item, index) => (
          <div
            key={item.title}
            className={cn(
              "space-y-2 pb-5",
              index !== work.length - 1 && "border-b border-border"
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
              <span className="text-xs text-muted-foreground">{item.period}</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
