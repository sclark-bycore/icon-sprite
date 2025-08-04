import { IndentIncrease as DevIcon, type LucideProps } from "lucide-react"
export const IndentIncrease: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#indent-increase`} />
    </svg>
  )
