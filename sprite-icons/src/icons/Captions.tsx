import { Captions as DevIcon, type LucideProps } from "lucide-react"
export const Captions: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#captions`} />
    </svg>
  )
