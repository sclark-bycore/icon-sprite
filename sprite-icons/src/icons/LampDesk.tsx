import { LampDesk as DevIcon, type LucideProps } from "lucide-react"
export const LampDesk: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#lamp-desk`} />
    </svg>
  )
