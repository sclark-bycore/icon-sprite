import { OctagonMinus as DevIcon, type LucideProps } from "lucide-react"
export const OctagonMinus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#octagon-minus`} />
    </svg>
  )
