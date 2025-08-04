import { Codepen as DevIcon, type LucideProps } from "lucide-react"
export const Codepen: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#codepen`} />
    </svg>
  )
