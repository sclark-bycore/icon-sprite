import { SpellCheck2 as DevIcon, type LucideProps } from "lucide-react"
export const SpellCheck2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#spell-check-2`} />
    </svg>
  )
