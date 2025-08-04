import { AlignVerticalJustifyStart as DevIcon, type LucideProps } from "lucide-react"
export const AlignVerticalJustifyStart: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#align-vertical-justify-start`} />
    </svg>
  )
