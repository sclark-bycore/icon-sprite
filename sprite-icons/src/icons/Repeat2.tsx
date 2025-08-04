import { Repeat2 as DevIcon, type LucideProps } from "lucide-react"
export const Repeat2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#repeat-2`} />
    </svg>
  )
