AI Card Generation
An interactive AI portrait generation interface with customizable settings and real-time preview.

Preview
AI Portrait Generation
Create stunning portraits with AI

Prompt
Picture of a women with orange background
Style

Artistic

Background

Studio

Lighting

Studio

Pose

Profile

Quality
720p
Generate Portrait
Installation
Install the component using the shadcn CLI:

npx shadcn@latest add https://ardacityui.ar.io/r/ai-card-generation.json

Usage
Import and use the component in your React application:

import AICardGeneration from "@/components/ardacity/ai-card-generation"

export default function MyPage() {
  return (
    <div className="flex justify-center p-8">
      <AICardGeneration />
    </div>
  )
}

Features
Interactive Form
Customizable settings for style, background, lighting, and pose with real-time updates.
Loading States
Animated loading indicators with progress tracking and dynamic status messages.
Error Handling
Graceful error states with user-friendly messages and retry functionality.
Responsive Design
Fully responsive layout that works seamlessly across all device sizes.