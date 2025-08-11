import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Braces as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Braces({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Braces", size, width, height);
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
  return  renderUse("braces", width, height, size, SPRITE_PATH, props)
}
