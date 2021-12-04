
import styled from '@emotion/styled'

import NavigationBar from "../Navigation/top-nav";

const LayoutSimpleContainer = ({ children }) => {
  return (
    <LayoutContainer>
      <NavigationBar />
      <Container>{children}</Container>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
height:100%;
min-height: 100vh;
background-color: #1e232b;
`

const Container = styled.div`

  padding-top: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
`;

export default LayoutSimpleContainer;
