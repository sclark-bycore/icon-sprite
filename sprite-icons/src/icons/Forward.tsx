import { Forward as DevIcon, type LucideProps } from "lucide-react"
export const Forward: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#forward`} />
    </svg>
  )
