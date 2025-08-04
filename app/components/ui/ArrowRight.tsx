import { ArrowRight as Icon } from "lucide-react"

export const ArrowRight: React.FC = () => {
  if (process.env.NODE_ENV === "development") {
    return <Icon />
  }
  return (
    <svg>
      <use href={`/icons.svg#arrow-right`} />
    </svg>
  )
}
