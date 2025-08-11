import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Shirt as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Shirt({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Shirt", size, width, height);
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
  return  renderUse("shirt", width, height, size, SPRITE_PATH, props)
}
