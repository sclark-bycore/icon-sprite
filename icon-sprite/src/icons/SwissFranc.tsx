import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { SwissFranc as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function SwissFranc({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("SwissFranc", size, width, height);
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
  return  renderUse("swiss-franc", width, height, size, SPRITE_PATH, props)
}
