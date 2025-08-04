import { FishOff as DevIcon, type LucideProps } from "lucide-react"
export const FishOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#fish-off`} />
    </svg>
  )
