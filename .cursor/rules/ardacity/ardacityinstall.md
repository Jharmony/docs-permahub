Installation
Getting started with Ardacity component library

Prerequisites
Make sure you have these dependencies installed in your project
Required
All components use Tailwind CSS v4, so ensure it's installed in your project.

Recommended
Many components also use the `cn` utility function and shadcn/ui components.

Install Utilities
Install the required utilities and dependencies
bun
npm
pnpm
bunx shadcn@latest add https://ardacityui.ar.io/r/utils.json
Copy
Usage Example
How to add and use components in your project
1. Install a component
bunx shadcn@latest add https://ardacityui.ar.io/r/avatar-picker.json
2. Import and use
import AvatarPicker from "@/components/ardacity/avatar-picker";

export default function Page() {
  return <AvatarPicker />;
}
Additional Information
Dependencies
We use lucide-icons for most components that include icons, along with some shadcn/ui components. These dependencies will be automatically installed when using the CLI.

Monorepo Support
For monorepo setups, use the `-c` flag to specify your workspace path:

bunx shadcn@latest add https://ardacityui.ar.io/r/avatar-picker.json -c ./apps/www