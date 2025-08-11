import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Heading5 as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Heading5({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Heading5", size, width, height);
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
  return  renderUse("heading-5", width, height, size, SPRITE_PATH, props)
}
