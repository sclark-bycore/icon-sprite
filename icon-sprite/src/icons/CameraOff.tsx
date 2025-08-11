import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { CameraOff as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function CameraOff({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("CameraOff", size, width, height);
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
  return  renderUse("camera-off", width, height, size, SPRITE_PATH, props)
}
