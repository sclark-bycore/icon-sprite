import { PackagePlus as DevIcon, type LucideProps } from "lucide-react"
export const PackagePlus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#package-plus`} />
    </svg>
  )
