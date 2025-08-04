import { Figma as DevIcon, type LucideProps } from "lucide-react"
export const Figma: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#figma`} />
    </svg>
  )
