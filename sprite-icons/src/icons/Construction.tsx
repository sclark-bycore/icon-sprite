import { Construction as DevIcon, type LucideProps } from "lucide-react"
export const Construction: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#construction`} />
    </svg>
  )
