import { PackageX as DevIcon, type LucideProps } from "lucide-react"
export const PackageX: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#package-x`} />
    </svg>
  )
