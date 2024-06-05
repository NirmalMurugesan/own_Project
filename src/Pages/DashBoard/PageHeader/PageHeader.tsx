import { Grid, Box } from "@mui/material";
import HeaderButtons from "./HeaderButtons/HeaderButtons";
import HeaderUserbox from "./HeaderUser/HeaderUserBox";

function PageHeader() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="end"
      padding="26px"
      boxShadow="0px 2px 4px -3px rgba(34, 51, 84, 0.1), 0px 5px 12px -4px rgba(34, 51, 84, 0.05)"
      margin="3px 5px 15px 5px"
      width="calc(100% - 10px)"
      
    >
      <Grid item>
        <Box display="flex" alignItems="center">
          <HeaderButtons />
          <HeaderUserbox />
        </Box>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
