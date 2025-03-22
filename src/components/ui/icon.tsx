// src/components/ui/icon.tsx
import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";
import React from "react";

interface IconProps extends LucideProps {
  name: keyof typeof LucideIcons;
}

export function Icon({ name, ...props }: IconProps) {
  // Cast the looked-up icon to a valid React component type
  const LucideIcon = LucideIcons[name] as React.ComponentType<LucideProps>;
  if (!LucideIcon) {
    console.error(`Icon "${name}" does not exist in lucide-react`);
    return null;
  }
  return <LucideIcon {...props} />;
}
