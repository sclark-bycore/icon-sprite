import { TreeDeciduous as DevIcon, type LucideProps } from "lucide-react"
export const TreeDeciduous: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#tree-deciduous`} />
    </svg>
  )
