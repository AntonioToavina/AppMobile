import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Container {
  children: any;
}

const ScrollTop: React.FC<Container> = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return children || null;
};

ScrollTop.propTypes = {
  children: PropTypes.node,
};

export default ScrollTop;
