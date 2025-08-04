import { TestTubes as DevIcon, type LucideProps } from "lucide-react"
export const TestTubes: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#test-tubes`} />
    </svg>
  )
