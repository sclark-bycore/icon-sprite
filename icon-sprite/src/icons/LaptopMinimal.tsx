import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { LaptopMinimal as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function LaptopMinimal({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("LaptopMinimal", size, width, height);
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
  return  renderUse("laptop-minimal", width, height, size, SPRITE_PATH, props)
}
