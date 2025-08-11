import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Youtube as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Youtube({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Youtube", size, width, height);
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
  return  renderUse("youtube", width, height, size, SPRITE_PATH, props)
}
