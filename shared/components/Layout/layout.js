
import styled from '@emotion/styled'

import NavigationBar from "../Navigation/top-nav";
import bg from "../../images/bg.svg"

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
background-color: #263238;
background-image: url('/bg.svg')
`

const Container = styled.div`

  padding-top: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
 
`;

export default LayoutSimpleContainer;
