import PropTypes from "prop-types";

// material-ui
import { Box } from "@mui/material";
import MainCard from "../../components/MainCard";

// project import

interface Container {
  children: any;
  other: any;
}

const AuthCard: React.FC<Container> = ({ children, ...other }) => (
  <MainCard
    contentSX={undefined}
    darkTitle={undefined}
    divider={undefined}
    elevation={undefined}
    secondary={undefined}
    title={undefined}
    codeHighlight={undefined}
    others={undefined}
    sx={{
      maxWidth: { xs: 400, lg: 475 },
      margin: { xs: 2.5, md: 3 },
      "& > *": {
        flexGrow: 1,
        flexBasis: "50%",
      },
    }}
    content={false}
    {...other}
    border={false}
    boxShadow
    shadow={(theme: any) => theme.customShadows.z1}
  >
    <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
  </MainCard>
);

AuthCard.propTypes = {
  children: PropTypes.node,
};

export default AuthCard;
