import { Radio as DevIcon, type LucideProps } from "lucide-react"
export const Radio: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#radio`} />
    </svg>
  )
