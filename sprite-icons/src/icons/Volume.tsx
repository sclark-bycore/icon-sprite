import { Volume as DevIcon, type LucideProps } from "lucide-react"
export const Volume: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#volume`} />
    </svg>
  )
