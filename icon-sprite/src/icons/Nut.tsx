import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Nut as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Nut({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Nut", size, width, height);
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
  return  renderUse("nut", width, height, size, SPRITE_PATH, props)
}
