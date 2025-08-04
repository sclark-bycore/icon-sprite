import { SpellCheck as DevIcon, type LucideProps } from "lucide-react"
export const SpellCheck: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#spell-check`} />
    </svg>
  )
