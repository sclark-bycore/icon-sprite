import { BeanOff as DevIcon, type LucideProps } from "lucide-react"
export const BeanOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#bean-off`} />
    </svg>
  )
