Music Card
New
Liquid Glass
A music player card with a liquid glass effect, animated controls, and glowing highlights.

Component Preview
Interactive preview of the Music Card component
Preview
Code
import { LiquidGlassMusicPlayer } from "@/components/ardacity/liquid-glass-music-player";

export default function Page() {
  return (
    <LiquidGlassMusicPlayer
      albumArt="/placeholder.svg?height=200&width=200"
      songTitle="Midnight Dreams"
      artist="Luna & The Stars"
      duration={245}
    />
  );
}
Copy
Installation
Install the Music Card component using the shadcn/ui CLI
bun
npm
pnpm
bunx shadcn@latest add https://ardacityui.ar.io/r/liquid-music-card.json
