Glass Dock
New
Liquid Glass
A macOS-style dock with a liquid glass effect and interactive glowing icons.

Component Preview
Interactive preview of the Glass Dock component
Preview
Code
import { LiquidGlassDock } from "@/components/ardacity/liquid-glass-dock";

export default function Page() {
  return (
    <div className="relative h-32 flex items-center justify-center">
      <LiquidGlassDock position="bottom" />
    </div>
  );
}
Copy
Installation
Install the Glass Dock component using the shadcn/ui CLI
bun
npm
pnpm
bunx shadcn@latest add https://ardacityui.ar.io/r/liquid-glass-dock.json
Copy
Dependencies
Required dependencies for this component
motion/react@/components/ui/card@/lib/utils
These dependencies will be automatically installed when using the CLI.