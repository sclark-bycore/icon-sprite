import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Heading6 as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Heading6({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Heading6", size, width, height);
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
  return  renderUse("heading-6", width, height, size, SPRITE_PATH, props)
}
