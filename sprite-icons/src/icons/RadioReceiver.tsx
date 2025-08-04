import { RadioReceiver as DevIcon, type LucideProps } from "lucide-react"
export const RadioReceiver: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#radio-receiver`} />
    </svg>
  )
