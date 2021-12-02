
import styled from '@emotion/styled'

import NavigationBar from "../Navigation/top-nav";

const LayoutSimpleContainer = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <Container>{children}</Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #1e232b;
`;

export default LayoutSimpleContainer;
