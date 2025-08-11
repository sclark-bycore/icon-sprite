import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { ClockFading as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function ClockFading({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("ClockFading", size, width, height);
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
  return  renderUse("clock-fading", width, height, size, SPRITE_PATH, props)
}
