import { ArrowRight as Icon, type LucideProps } from "lucide-react"
const pascalToKebab = (s: string) =>
  s
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2") // abcX → abc-x
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2") // XXx → x-x
    .replace(/([a-z])([0-9])/g, "$1-$2") // abc123 → abc-123
    .replace(/([0-9])([a-z])/g, "$1-$2") // 123abc → 123-abc
    .toLowerCase()

const DEV = process.env.NODE_ENV === "development"
if (!Icon?.displayName) {
  throw new Error("Icon.displayName is not defined")
}
const name = pascalToKebab(Icon.displayName)

export const ArrowRight: React.FC<LucideProps> = (props) => {
  if (DEV) {
    return <Icon {...props} />
  }
  return (
    <svg>
      <use href={`/icons.svg#${name}`} />
    </svg>
  )
}
