import { AlignVerticalJustifyCenter as DevIcon, type LucideProps } from "lucide-react"
export const AlignVerticalJustifyCenter: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#align-vertical-justify-center`} />
    </svg>
  )
