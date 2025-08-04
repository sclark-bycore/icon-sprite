import { WheatOff as DevIcon, type LucideProps } from "lucide-react"
export const WheatOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#wheat-off`} />
    </svg>
  )
