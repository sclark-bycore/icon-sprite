import { SignalZero as DevIcon, type LucideProps } from "lucide-react"
export const SignalZero: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#signal-zero`} />
    </svg>
  )
