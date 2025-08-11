import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Anchor as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Anchor({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Anchor", size, width, height);
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
  return  renderUse("anchor", width, height, size, SPRITE_PATH, props)
}
