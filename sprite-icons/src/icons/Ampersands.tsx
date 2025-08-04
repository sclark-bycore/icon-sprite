import { Ampersands as DevIcon, type LucideProps } from "lucide-react"
export const Ampersands: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#ampersands`} />
    </svg>
  )
