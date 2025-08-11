import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { MonitorCog as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function MonitorCog({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("MonitorCog", size, width, height);
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
  return  renderUse("monitor-cog", width, height, size, SPRITE_PATH, props)
}
