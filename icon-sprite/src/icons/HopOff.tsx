import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { HopOff as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function HopOff({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("HopOff", size, width, height);
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
  return  renderUse("hop-off", width, height, size, SPRITE_PATH, props)
}
