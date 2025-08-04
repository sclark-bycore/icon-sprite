import { Music3 as DevIcon, type LucideProps } from "lucide-react"
export const Music3: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#music-3`} />
    </svg>
  )
