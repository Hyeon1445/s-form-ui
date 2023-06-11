import {
  useFloating,
  useClick,
  useDismiss,
  useInteractions,
  offset,
  flip,
  autoUpdate,
} from "@floating-ui/react";
import React, { CSSProperties } from "react";
import { useSelectContext } from "./SelectContext";
import * as S from "./Options.style";

export type SelectOptionsProps = {
  children?: React.ReactNode;
  style?: CSSProperties;
  isPopover?: boolean;
};

const defaultMenuStyle: CSSProperties = {
  width: "100%",
  listStyleType: "none",
  borderRadius: "0.5rem",
  maxHeight: "10rem",
  overflowY: "auto",
  backgroundColor: "white",
  border: "1px solid #dbdbdb",
};

const defaultStyle: CSSProperties = {
  position: "absolute",
  zIndex: 10,
  width: "100%",
  listStyleType: "none",
  borderRadius: "0.5rem",
  maxHeight: "10rem",
  overflowY: "auto",
  backgroundColor: "white",
  boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.2)",
};

const Options = ({ children, style, isPopover = true }: SelectOptionsProps) => {
  const { isOpen, anchor, setIsOpen } = useSelectContext();
  const { refs, floatingStyles, context } = useFloating({
    elements: {
      reference: anchor,
    },
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [offset(5), flip()],
  });
  const click = useClick(context, { event: "mousedown" });
  const dismiss = useDismiss(context);
  const { getFloatingProps } = useInteractions([click, dismiss]);

  if (!isPopover) {
    return (
      <S.Container style={{ ...defaultMenuStyle, ...style }}>
        {children}
      </S.Container>
    );
  }
  return isOpen ? (
    <S.Container
      ref={refs.setFloating}
      {...getFloatingProps()}
      style={{ ...defaultStyle, ...style, ...floatingStyles }}
    >
      {children}
    </S.Container>
  ) : null;
};

export default Options;
