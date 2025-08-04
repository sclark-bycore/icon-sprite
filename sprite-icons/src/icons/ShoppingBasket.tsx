import { ShoppingBasket as DevIcon, type LucideProps } from "lucide-react"
export const ShoppingBasket: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#shopping-basket`} />
    </svg>
  )
