import { PackageOpen as DevIcon, type LucideProps } from "lucide-react"
export const PackageOpen: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#package-open`} />
    </svg>
  )
