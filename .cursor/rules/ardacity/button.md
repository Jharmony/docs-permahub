Liquid Button
New
Liquid Glass
A button with a liquid glass effect and animated glowing border.

Component Preview
All button variants with a moving background
Preview
Code
import { LiquidGlassButton } from "@/components/ardacity/liquid-glass-button";

export default function Page() {
  return (
    <>
      <LiquidGlassButton variant="primary" size="md">Primary</LiquidGlassButton>
      <LiquidGlassButton variant="secondary" size="md">Secondary</LiquidGlassButton>
      <LiquidGlassButton variant="outline" size="md">Outline</LiquidGlassButton>
      <LiquidGlassButton variant="primary" size="lg">Large Primary</LiquidGlassButton>
      <LiquidGlassButton variant="secondary" size="lg">Large Secondary</LiquidGlassButton>
      <LiquidGlassButton variant="outline" size="lg">Large Outline</LiquidGlassButton>
      <LiquidGlassButton variant="primary" size="sm">Small Primary</LiquidGlassButton>
      <LiquidGlassButton variant="secondary" size="sm">Small Secondary</LiquidGlassButton>
      <LiquidGlassButton variant="outline" size="sm">Small Outline</LiquidGlassButton>
      <LiquidGlassButton variant="primary" size="md" disabled>Disabled</LiquidGlassButton>
    </>
  );
}
Copy
Installation
Install the Liquid Button component using the shadcn/ui CLI
bun
npm
pnpm
bunx shadcn@latest add https://ardacityui.ar.io/r/liquid-glass-button.json
Copy
Dependencies
Required dependencies for this component
motion/react@/components/ui/card@/lib/utilslucide-react
These dependencies will be automatically installed when using the CLI.