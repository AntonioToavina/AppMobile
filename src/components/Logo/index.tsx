import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// material-ui
import { ButtonBase } from "@mui/material";

// project import
import Logo from "./Logo";
import config from "../../config";

interface Container {
  sx: any;
  to: any;
}

const LogoSection: React.FC<Container> = ({ sx, to }) => (
  <ButtonBase
    disableRipple
    component={Link}
    to={!to ? config.defaultPath : to}
    sx={sx}
  >
    <Logo />
  </ButtonBase>
);

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string,
};

export default LogoSection;
