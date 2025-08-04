import { ArrowsUpFromLine as DevIcon, type LucideProps } from "lucide-react"
export const ArrowsUpFromLine: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrows-up-from-line`} />
    </svg>
  )
