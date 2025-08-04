import { PointerOff as DevIcon, type LucideProps } from "lucide-react"
export const PointerOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#pointer-off`} />
    </svg>
  )
