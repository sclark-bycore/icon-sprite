import { WashingMachine as DevIcon, type LucideProps } from "lucide-react"
export const WashingMachine: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#washing-machine`} />
    </svg>
  )
