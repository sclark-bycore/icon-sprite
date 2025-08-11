import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { LayoutList as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function LayoutList({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("LayoutList", size, width, height);
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
  return  renderUse("layout-list", width, height, size, SPRITE_PATH, props)
}
