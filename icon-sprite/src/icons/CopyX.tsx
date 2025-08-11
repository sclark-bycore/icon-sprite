import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { CopyX as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function CopyX({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("CopyX", size, width, height);
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
  return  renderUse("copy-x", width, height, size, SPRITE_PATH, props)
}
