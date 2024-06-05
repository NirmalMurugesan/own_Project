import {
    IconButton,
    Tooltip,
  } from '@mui/material';
import { FaCirclePlus } from 'react-icons/fa6';
  
  function HeaderFilter() {
  
    return (
      <>
        <Tooltip arrow title="Filter">
          <IconButton color="primary" >
              <FaCirclePlus fontSize="28px"/>
          </IconButton>
        </Tooltip>
      </>
    );
  }
  
  export default HeaderFilter;
  