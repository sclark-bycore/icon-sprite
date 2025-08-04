import { AtSign as DevIcon, type LucideProps } from "lucide-react"
export const AtSign: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#at-sign`} />
    </svg>
  )
