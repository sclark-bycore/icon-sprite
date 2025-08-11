import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Glasses as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Glasses({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Glasses", size, width, height);
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
  return  renderUse("glasses", width, height, size, SPRITE_PATH, props)
}
