import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { WandSparkles as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function WandSparkles({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("WandSparkles", size, width, height);
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
  return  renderUse("wand-sparkles", width, height, size, SPRITE_PATH, props)
}
