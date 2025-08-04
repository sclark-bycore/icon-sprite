import { Component as DevIcon, type LucideProps } from "lucide-react"
export const Component: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#component`} />
    </svg>
  )
