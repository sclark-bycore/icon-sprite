import { Caravan as DevIcon, type LucideProps } from "lucide-react"
export const Caravan: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#caravan`} />
    </svg>
  )
