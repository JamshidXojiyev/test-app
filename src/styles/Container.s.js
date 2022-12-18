import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;

  // magring: 0 10px
  @media (max-width: 427px) {
    width: clamp(220px, 90%, 408px);
  }

  // magring: 0 10px
  @media (min-width: 428px) {
    width: clamp(320px, 90%, 556px);
  }

  // magring: 0 20px
  @media (min-width: 576px) {
    width: clamp(320px, 90%, 728px);
  }

  // magring: 0 40px
  @media (min-width: 768px) {
    width: clamp(320px, 80%, 912px);
  }

  // magring: 0 100px
  @media (min-width: 992px) {
    width: clamp(320px, 80%, 1200px);
  }

  // magring: 0 100px
  @media (min-width: 1400px) {
    width: clamp(320px, 80%, 1720px);
  }

  // magring: 0 100px
  @media (min-width: 1920px) {
    width: clamp(320px, 70%, 2360px);
  }
`;
