import { PartyPopper as DevIcon, type LucideProps } from "lucide-react"
export const PartyPopper: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#party-popper`} />
    </svg>
  )
