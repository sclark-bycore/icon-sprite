import { Music4 as DevIcon, type LucideProps } from "lucide-react"
export const Music4: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#music-4`} />
    </svg>
  )
