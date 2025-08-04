import { Music2 as DevIcon, type LucideProps } from "lucide-react"
export const Music2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#music-2`} />
    </svg>
  )
