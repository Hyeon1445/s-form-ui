import styled from "@emotion/styled";
import {
  useFloating,
  useClick,
  useDismiss,
  useInteractions,
  offset,
  flip,
  autoUpdate,
} from "@floating-ui/react";
import { useState } from "react";

const PopOver = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [offset(5), flip()],
  });

  const click = useClick(context, { event: "mousedown" });
  const dismiss = useDismiss(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  return (
    <Container>
      <PopOverButton
        ref={refs.setReference}
        type="button"
        {...getReferenceProps()}
      >
        button
      </PopOverButton>
      {isOpen && (
        <OptionContainer
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          options
        </OptionContainer>
      )}
    </Container>
  );
};

const PopOverButton = styled.button`
  background-color: red;
  width: 100%;
  padding: 0.5rem;
  color: white;
`;
const OptionContainer = styled.div`
  @keyframes fadein {
    from {
      opacity: 0.7;
    }
    to {
      opacity: 1;
    }
  }
  background-color: white;
  width: 100%;
  text-align: center;
  padding: 2rem;
  transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0s;
  animation-duration: 0.25s;
  animation-name: fadein;
`;
const Container = styled.div`
  position: relative;
  width: 10rem;
`;

export default PopOver;
