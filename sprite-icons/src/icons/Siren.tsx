import { Siren as DevIcon, type LucideProps } from "lucide-react"
export const Siren: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#siren`} />
    </svg>
  )
