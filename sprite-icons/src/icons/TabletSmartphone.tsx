import { TabletSmartphone as DevIcon, type LucideProps } from "lucide-react"
export const TabletSmartphone: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#tablet-smartphone`} />
    </svg>
  )
