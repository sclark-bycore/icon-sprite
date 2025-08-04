import { Power as DevIcon, type LucideProps } from "lucide-react"
export const Power: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#power`} />
    </svg>
  )
