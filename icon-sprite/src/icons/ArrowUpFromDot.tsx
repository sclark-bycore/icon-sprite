import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { ArrowUpFromDot as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function ArrowUpFromDot({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("ArrowUpFromDot", size, width, height);
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
  return  renderUse("arrow-up-from-dot", width, height, size, SPRITE_PATH, props)
}
