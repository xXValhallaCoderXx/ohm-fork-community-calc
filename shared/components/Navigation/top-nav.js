import { forwardRef } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";

import Logo from "../../../shared/images/wolf.png";
import LogoText from "../../../shared/images/logo-text.png";

// eslint-disable-next-line react/display-name
const LinkBehavior = forwardRef((props, ref) => (
  <NextLink ref={ref} href="/" {...props} role={undefined} />
));

const NavigationBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Link
          style={{ display: "flex", alignItems: "center" }}
          sx={{ marginLeft: 3, flexGrow: 1, marginTop: 0.5 }}
          href="/"
        >
          <Image
            src={Logo}
            alt="Picture of the author"
            width={40}
            height={40}
          />
          <Image
            src={LogoText}
            alt="Picture of the author"
            width={130}
            height={20}
          />
        </Link>

        <LinkContainer>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            href="/calculator"
          >
            <Typography variant="h6" component="div">
              Calculator
            </Typography>
          </Link>
          {/* 
          <Link
            style={{ color: "#d8cab9", textDecoration: "none" }}
            href="/faq"
          >
            <Typography variant="h6" component="div">
              Faq
            </Typography>
          </Link> */}
        </LinkContainer>
      </Toolbar>
    </AppBar>
  );
};

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 130px;
`;

export default NavigationBar;
