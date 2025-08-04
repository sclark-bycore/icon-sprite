import { Zap as DevIcon, type LucideProps } from "lucide-react"
export const Zap: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#zap`} />
    </svg>
  )
