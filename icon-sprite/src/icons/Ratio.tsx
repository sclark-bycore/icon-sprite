import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Ratio as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Ratio({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Ratio", size, width, height);
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
  return  renderUse("ratio", width, height, size, SPRITE_PATH, props)
}
