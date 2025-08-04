import { NavigationOff as DevIcon, type LucideProps } from "lucide-react"
export const NavigationOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#navigation-off`} />
    </svg>
  )
