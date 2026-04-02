import Image from "next/image";
import SharedTransition from "../shared-transition";
import { cn } from "../../lib/utils";

function ImageCard({ className }: { className?: string }) {
  return (
    <SharedTransition name="my-photo">
      <div className={cn("minimal-card group overflow-hidden p-0", className)}>
        <Image
          src="/images/pp.png"
          alt="Ananthakrishnan Profile Picture"
          width={400}
          height={460}
          className="h-full w-full object-cover filter grayscale"
          priority
        />
      </div>
    </SharedTransition>
  );
}

export default ImageCard;
