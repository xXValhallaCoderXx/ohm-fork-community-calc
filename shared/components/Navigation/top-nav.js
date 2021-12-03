import { forwardRef } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@mui/material/IconButton";

import Logo from "../../../shared/images/logo.png";
const navStyles = makeStyles((theme) => ({
  topNav: {
    backgroundColor: theme.palette.primary.main,
  },
}));

// eslint-disable-next-line react/display-name
const LinkBehavior = forwardRef((props, ref) => (
  <NextLink ref={ref} href="/" {...props} role={undefined} />
));

const NavigationBar = () => {
  const classes = navStyles();
  return (
    <AppBar className={classes.topNav}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <Image
            src={Logo}
            alt="Picture of the author"
            width={40}
            height={40}
          />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ marginLeft: 3, flexGrow: 1 }}
        >
          Home
        </Typography>
        <Link color="text.primary" href="/calculator">
          Calculator
        </Link>

        <Link href="/faq">
          <Typography variant="h6" component="div">
            Faq
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

const HomeLink = styled(Link)`
  font-size: 20px;
  letter-spacing: 1px;
`;

const StyledLink = styled(Link)`
  margin-right: 15px;
  font-size: 20px;
  letter-spacing: 1px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default NavigationBar;
