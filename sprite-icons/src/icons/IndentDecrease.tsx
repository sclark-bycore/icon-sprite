import { IndentDecrease as DevIcon, type LucideProps } from "lucide-react"
export const IndentDecrease: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#indent-decrease`} />
    </svg>
  )
