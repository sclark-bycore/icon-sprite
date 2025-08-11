import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Wind as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Wind({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Wind", size, width, height);
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
  return  renderUse("wind", width, height, size, SPRITE_PATH, props)
}
