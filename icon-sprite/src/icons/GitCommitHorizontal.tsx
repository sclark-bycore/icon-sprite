import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { GitCommitHorizontal as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function GitCommitHorizontal({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("GitCommitHorizontal", size, width, height);
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
  return  renderUse("git-commit-horizontal", width, height, size, SPRITE_PATH, props)
}
