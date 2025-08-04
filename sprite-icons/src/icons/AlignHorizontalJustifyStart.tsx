import { AlignHorizontalJustifyStart as DevIcon, type LucideProps } from "lucide-react"
export const AlignHorizontalJustifyStart: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#align-horizontal-justify-start`} />
    </svg>
  )
