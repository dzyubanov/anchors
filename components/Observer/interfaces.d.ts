import { UseIntersectionObserverArgs } from "../../helpers/useIntersectionObserver";

export interface OberserverProps extends UseIntersectionObserverArgs {
  onVisible: () => void;
  onInvisible?: () => void;
  className?: string;
}
