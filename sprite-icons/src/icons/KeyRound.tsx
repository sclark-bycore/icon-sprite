import { KeyRound as DevIcon, type LucideProps } from "lucide-react"
export const KeyRound: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#key-round`} />
    </svg>
  )
