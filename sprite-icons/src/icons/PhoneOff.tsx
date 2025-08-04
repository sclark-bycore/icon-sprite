import { PhoneOff as DevIcon, type LucideProps } from "lucide-react"
export const PhoneOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#phone-off`} />
    </svg>
  )
