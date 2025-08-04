import { DoorOpen as DevIcon, type LucideProps } from "lucide-react"
export const DoorOpen: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#door-open`} />
    </svg>
  )
