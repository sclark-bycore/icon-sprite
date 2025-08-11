import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { GitPullRequestCreateArrow as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function GitPullRequestCreateArrow({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("GitPullRequestCreateArrow", size, width, height);
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
  return  renderUse("git-pull-request-create-arrow", width, height, size, SPRITE_PATH, props)
}
