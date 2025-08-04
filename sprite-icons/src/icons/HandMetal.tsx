import { HandMetal as DevIcon, type LucideProps } from "lucide-react"
export const HandMetal: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#hand-metal`} />
    </svg>
  )
