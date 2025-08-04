import { PhoneOutgoing as DevIcon, type LucideProps } from "lucide-react"
export const PhoneOutgoing: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#phone-outgoing`} />
    </svg>
  )
