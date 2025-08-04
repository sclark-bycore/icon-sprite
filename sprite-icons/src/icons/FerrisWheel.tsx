import { FerrisWheel as DevIcon, type LucideProps } from "lucide-react"
export const FerrisWheel: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#ferris-wheel`} />
    </svg>
  )
