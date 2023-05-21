import { useFloating, offset, flip, autoUpdate } from "@floating-ui/react";
import { CSSProperties, ReactNode } from "react";
import { useInputContext } from "./InputContext";

type TooltipProps = {
  validNode?: ReactNode;
  errorNode?: ReactNode;
};

const defaultStyle: CSSProperties = {
  zIndex: 10,
  width: "100%",
  borderRadius: "0.25rem",
  backgroundColor: "white",
  padding: "0 0.5rem",
  boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.4)",
};

const Tooltip = ({ validNode, errorNode }: TooltipProps) => {
  const {
    fieldProps: {
      meta: { error, touched },
    },
    anchor,
  } = useInputContext();
  const { refs, floatingStyles } = useFloating({
    elements: {
      reference: anchor,
    },
    whileElementsMounted: autoUpdate,
    middleware: [offset(5), flip()],
  });
  const hasError = !!(touched && error);
  const isValid = touched && !error;
  if (hasError && !!errorNode)
    return (
      <div
        ref={refs.setFloating}
        style={{ ...defaultStyle, ...floatingStyles }}
      >
        {errorNode}
      </div>
    );
  if (isValid && !!validNode)
    return (
      <div
        ref={refs.setFloating}
        style={{ ...defaultStyle, ...floatingStyles }}
      >
        {validNode}
      </div>
    );
  return null;
};

export default Tooltip;
