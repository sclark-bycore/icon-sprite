import { TestTube as DevIcon, type LucideProps } from "lucide-react"
export const TestTube: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#test-tube`} />
    </svg>
  )
