import { VenusAndMars as DevIcon, type LucideProps } from "lucide-react"
export const VenusAndMars: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#venus-and-mars`} />
    </svg>
  )
