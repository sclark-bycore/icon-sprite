import { SendHorizontal as DevIcon, type LucideProps } from "lucide-react"
export const SendHorizontal: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#send-horizontal`} />
    </svg>
  )
