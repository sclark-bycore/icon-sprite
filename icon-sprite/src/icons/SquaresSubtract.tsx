import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { SquaresSubtract as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function SquaresSubtract({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("SquaresSubtract", size, width, height);
  if (process.env.NODE_ENV !== "production" && DevIcon) {
    return (
      <DevIcon
        {...(props as any)}
        {...(size != null ? { size } : {})}
        {...(width != null ? { width } : {})}
        {...(height != null ? { height } : {})}
      />
    );
  }
  return  renderUse("squares-subtract", width, height, size, SPRITE_PATH, props)
}
