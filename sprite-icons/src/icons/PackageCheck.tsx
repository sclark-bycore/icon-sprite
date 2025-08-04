import { PackageCheck as DevIcon, type LucideProps } from "lucide-react"
export const PackageCheck: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#package-check`} />
    </svg>
  )
