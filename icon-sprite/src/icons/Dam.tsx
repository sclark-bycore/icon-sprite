import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Dam as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Dam({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Dam", size, width, height);
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
  return  renderUse("dam", width, height, size, SPRITE_PATH, props)
}
