import { Wind as DevIcon, type LucideProps } from "lucide-react"
export const Wind: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#wind`} />
    </svg>
  )
