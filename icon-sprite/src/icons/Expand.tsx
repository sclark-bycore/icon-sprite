import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Expand as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Expand({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Expand", size, width, height);
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
  return  renderUse("expand", width, height, size, SPRITE_PATH, props)
}
