import { FlameKindling as DevIcon, type LucideProps } from "lucide-react"
export const FlameKindling: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#flame-kindling`} />
    </svg>
  )
