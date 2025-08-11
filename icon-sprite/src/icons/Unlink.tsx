import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Unlink as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Unlink({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Unlink", size, width, height);
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
  return  renderUse("unlink", width, height, size, SPRITE_PATH, props)
}
