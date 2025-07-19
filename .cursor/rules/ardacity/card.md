Liquid Card
New
Liquid Glass
A card with a liquid glass effect and animated glowing border.

Component Preview
Multiple card variants with a moving background
Preview
Code
import { LiquidGlassCard } from "@/components/ardacity/liquid-glass-card";

export default function Page() {
  return (
    <>
      <LiquidGlassCard
        title="Glowing Card"
        description="A card with an extra glowing border for special highlights or callouts."
        imageUrl="https://pbs.twimg.com/media/GugZ-u9W0AAEvmr?format=jpg&name=4096x4096"
        imageAlt="Glowing Card"
        className="shadow-[0_0_32px_8px_rgba(91,250,252,0.25)] rounded-[22px] min-h-[500px] max-w-md mx-auto"
        borderWidth={3}
        variant="default"
      >
        <div className="flex gap-2 mt-2">
          <Button size="sm" variant="default">Try Now</Button>
        </div>
      </LiquidGlassCard>
      <LiquidGlassCard
        title="ArDacity UI"
        description="A beautiful card with content overlay on the image. Perfect for feature highlights or hero sections."
        imageUrl="https://lh3.googleusercontent.com/y60KH8wArPNVy4kslnWZFX_rDIxxPNmMLsWTwz9GiGnfCmygzsgk2ZItVZ74vBPHyqhT6nzSiWZU8TxFJEo8FN20wtnEPkGDrNksVfP2wmz66xRANzAAdOy11VBosgRmTykIsBMs"
        imageAlt="Overlay Card"
        className="rounded-[22px] min-h-[500px] max-w-md mx-auto"
        borderWidth={3}
        variant="overlay"
      >
        <div className="flex gap-2">
          <Button size="sm" variant="secondary">Learn More</Button>
          <Button size="sm" variant="outline" className="text-black dark:text-white">Share</Button>
        </div>
      </LiquidGlassCard>
    </>
  );
}
Copy
Installation
Install the Liquid Card component using the shadcn/ui CLI
bun
npm
pnpm
bunx shadcn@latest add https://ardacityui.ar.io/r/liquid-glass-card.json
Copy
Dependencies
Required dependencies for this component
motion/react@/components/ui/card@/lib/utilslucide-react
These dependencies will be automatically installed when using the CLI.