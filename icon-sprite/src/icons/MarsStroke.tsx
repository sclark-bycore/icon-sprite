import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { MarsStroke as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function MarsStroke({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("MarsStroke", size, width, height);
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
  return  renderUse("mars-stroke", width, height, size, SPRITE_PATH, props)
}
