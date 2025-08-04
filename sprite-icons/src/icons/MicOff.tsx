import { MicOff as DevIcon, type LucideProps } from "lucide-react"
export const MicOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#mic-off`} />
    </svg>
  )
