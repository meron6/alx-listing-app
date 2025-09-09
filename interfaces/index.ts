// interfaces/index.ts

// Props for the reusable Card component
export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

// Props for the reusable Button component
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}
