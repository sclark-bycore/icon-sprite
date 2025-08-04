import { MegaphoneOff as DevIcon, type LucideProps } from "lucide-react"
export const MegaphoneOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#megaphone-off`} />
    </svg>
  )
