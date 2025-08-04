import { AlignCenterHorizontal as DevIcon, type LucideProps } from "lucide-react"
export const AlignCenterHorizontal: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#align-center-horizontal`} />
    </svg>
  )
