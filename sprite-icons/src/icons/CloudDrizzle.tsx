import { CloudDrizzle as DevIcon, type LucideProps } from "lucide-react"
export const CloudDrizzle: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#cloud-drizzle`} />
    </svg>
  )
