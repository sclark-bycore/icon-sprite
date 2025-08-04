import { Clock4 as DevIcon, type LucideProps } from "lucide-react"
export const Clock4: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#clock-4`} />
    </svg>
  )
