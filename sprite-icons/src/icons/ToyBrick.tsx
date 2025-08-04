import { ToyBrick as DevIcon, type LucideProps } from "lucide-react"
export const ToyBrick: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#toy-brick`} />
    </svg>
  )
