import { Sprout as DevIcon, type LucideProps } from "lucide-react"
export const Sprout: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#sprout`} />
    </svg>
  )
