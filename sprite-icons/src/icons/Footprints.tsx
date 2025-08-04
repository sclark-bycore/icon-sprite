import { Footprints as DevIcon, type LucideProps } from "lucide-react"
export const Footprints: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#footprints`} />
    </svg>
  )
