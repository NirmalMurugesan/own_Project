import { Box } from '@mui/material';
import HeaderFilter from './FilterButtons/FilterButton';


function HeaderButtons() {
  return (
    <Box sx={{ mr: 1 }}>
      <Box sx={{ mx: 0.5 }} component="span">
        <HeaderFilter />
      </Box>
    </Box>
  );
}

export default HeaderButtons;
