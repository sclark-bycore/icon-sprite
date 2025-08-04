import { SquircleDashed as DevIcon, type LucideProps } from "lucide-react"
export const SquircleDashed: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#squircle-dashed`} />
    </svg>
  )
