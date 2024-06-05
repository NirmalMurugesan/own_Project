// import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Box, styled, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
          height: 80px;
          color: #6E759F;
          padding: 0 28px;
          right: 0;
          z-index: 6;
          background-color: rgba(255, 255, 255, 0.95);
          position: fixed;
          justify-content: space-between;
          width: 100%;
          @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: 220px;
            width: auto;
        }
  `
);
const SearchInputWrapper = styled(TextField)(
  ({ theme }) => `
      background: #cecece;
      width: 450px;

      .MuiInputBase-input {
          font-size: 17px;
          padding: 8px 5px;
          color: #00000;
          font-weight: 500
      }
  `
);

export default function Header() {
  const locationOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'Location_1',
      name: 'Location_1'
    },
    {
      id: 'Location_1',
      name: 'Location_1'
    },
    {
      id: 'Location_1',
      name: 'Location_1'
    }
  ];
  const handleStatusChange = () => {
    
  };
  return (
    <HeaderWrapper
      display="flex"
      alignItems="center"
      sx={{
        boxShadow:
          "0px 2px 8px -3px rgba(34, 51, 84, 0.2), 0px 5px 22px -4px rgba(34, 51, 84, 0.1)",
      }}
    >
      <Box display="flex" alignItems="center" margin="0 28px">
        <SearchInputWrapper
          InputProps={{
            startAdornment: <SearchTwoToneIcon />,
          }}
          placeholder="Search terms here..."
          fullWidth
        />
      </Box>
      <Box width={250}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Location</InputLabel>
          <Select
            onChange={handleStatusChange}
            label="Location"
            autoWidth
            fullWidth
            style={{height:"40px", padding: "7px 15px" }}
          >
            {locationOptions.map((locationOption) => (
              <MenuItem key={locationOption.id} value={locationOption.id}>
                {locationOption.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </HeaderWrapper>
  );
}
