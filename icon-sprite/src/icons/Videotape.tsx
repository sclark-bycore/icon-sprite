import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Videotape as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Videotape({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Videotape", size, width, height);
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
  return  renderUse("videotape", width, height, size, SPRITE_PATH, props)
}
