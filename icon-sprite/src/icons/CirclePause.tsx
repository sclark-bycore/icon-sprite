import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { CirclePause as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function CirclePause({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("CirclePause", size, width, height);
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
  return  renderUse("circle-pause", width, height, size, SPRITE_PATH, props)
}
