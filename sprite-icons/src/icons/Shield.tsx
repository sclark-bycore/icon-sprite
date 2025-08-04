import { Shield as DevIcon, type LucideProps } from "lucide-react"
export const Shield: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#shield`} />
    </svg>
  )
