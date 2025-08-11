import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { PaintBucket as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function PaintBucket({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("PaintBucket", size, width, height);
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
  return  renderUse("paint-bucket", width, height, size, SPRITE_PATH, props)
}
