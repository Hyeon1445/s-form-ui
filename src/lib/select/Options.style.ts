import styled from "@emotion/styled";

export const Container = styled.ul`
  @keyframes fadein {
    from {
      opacity: 0.7;
    }
    to {
      opacity: 1;
    }
  }
  transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0s;
  animation-duration: 0.25s;
  animation-name: fadein;
`;
