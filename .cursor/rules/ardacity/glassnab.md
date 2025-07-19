Liquid Glass Navbar
New
Liquid Glass
A glass-effect navbar that shrinks on scroll, sticky to the top of the preview canvas.

Component Preview
Sticky glass navbar with shrink-on-scroll effect
Preview
Code
import { LiquidGlassNavbar } from "@/components/ardacity/liquid-glass-navbar";

export default function Page() {
  return (
    <LiquidGlassNavbar
      brand="ArDacity UI"
      links={[
        { label: 'Home', href: '#' },
        { label: 'Features', href: '#' },
        { label: 'Docs', href: '#' },
      ]}
      cta={{ label: 'Get Started', href: '#' }}
    />
  );
}
Copy
Installation
Install the Liquid Glass Navbar component using the shadcn/ui CLI
bun
npm
pnpm
bunx shadcn@latest add https://ardacityui.ar.io/r/liquid-glass-navbar.json
Copy
Dependencies
Required dependencies for this component
motion/react@/components/ui/card@/lib/utils
These dependencies will be automatically installed when using the CLI.