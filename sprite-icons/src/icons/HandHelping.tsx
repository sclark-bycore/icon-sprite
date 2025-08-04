import { HandHelping as DevIcon, type LucideProps } from "lucide-react"
export const HandHelping: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#hand-helping`} />
    </svg>
  )
