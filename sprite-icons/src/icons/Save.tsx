import { Save as DevIcon, type LucideProps } from "lucide-react"
export const Save: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#save`} />
    </svg>
  )
