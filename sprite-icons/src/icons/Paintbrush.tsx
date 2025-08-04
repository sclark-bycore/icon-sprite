import { Paintbrush as DevIcon, type LucideProps } from "lucide-react"
export const Paintbrush: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#paintbrush`} />
    </svg>
  )
