import { ChefHat as DevIcon, type LucideProps } from "lucide-react"
export const ChefHat: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chef-hat`} />
    </svg>
  )
