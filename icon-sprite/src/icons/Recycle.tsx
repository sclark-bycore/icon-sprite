import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Recycle as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Recycle({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Recycle", size, width, height);
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
  return  renderUse("recycle", width, height, size, SPRITE_PATH, props)
}
