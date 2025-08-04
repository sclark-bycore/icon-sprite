import { Settings2 as DevIcon, type LucideProps } from "lucide-react"
export const Settings2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#settings-2`} />
    </svg>
  )
