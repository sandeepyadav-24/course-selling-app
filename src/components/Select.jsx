import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [Published, setPublished] = React.useState("");

  const handleChange = (event) => {
    setPublished(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Published</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Published}
          label="Published"
          onChange={handleChange}
        >
          <MenuItem value={true}>True</MenuItem>
          <MenuItem value={false}>False </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
