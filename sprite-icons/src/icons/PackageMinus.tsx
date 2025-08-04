import { PackageMinus as DevIcon, type LucideProps } from "lucide-react"
export const PackageMinus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#package-minus`} />
    </svg>
  )
