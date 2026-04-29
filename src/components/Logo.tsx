import Image from "next/image";
import { brand } from "@/config/brand";

type Props = {
  className?: string;
  height?: number;
  withWordmark?: boolean;
};

/**
 * Pulls the live AQ logo PNG (red square + "AQ" mark + dark navy wordmark)
 * straight from the source. We use it both as nav lockup and in the footer.
 */
export default function Logo({ className = "", height = 36, withWordmark = true }: Props) {
  return (
    <span className={`inline-flex items-center ${className}`} aria-label={brand.name}>
      <Image
        src="/aq_logo.png"
        alt={`${brand.name} logo`}
        height={height}
        width={Math.round(height * (withWordmark ? 5.6 : 1))}
        priority
        className="h-full w-auto select-none"
      />
    </span>
  );
}
