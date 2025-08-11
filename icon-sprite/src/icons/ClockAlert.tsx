import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { ClockAlert as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function ClockAlert({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("ClockAlert", size, width, height);
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
  return  renderUse("clock-alert", width, height, size, SPRITE_PATH, props)
}
