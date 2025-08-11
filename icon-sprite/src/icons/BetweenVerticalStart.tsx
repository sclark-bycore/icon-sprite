import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { BetweenVerticalStart as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function BetweenVerticalStart({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("BetweenVerticalStart", size, width, height);
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
  return  renderUse("between-vertical-start", width, height, size, SPRITE_PATH, props)
}
