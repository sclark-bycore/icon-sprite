import { BedSingle as DevIcon, type LucideProps } from "lucide-react"
export const BedSingle: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#bed-single`} />
    </svg>
  )
