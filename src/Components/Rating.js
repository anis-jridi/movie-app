import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function BasicRating({ rating }) {
  const [value, setValue] = React.useState();

  return (
    <Box
      sx={{
        "& > legend": { mt: 5 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={rating}
        // onClick={(setValue) => handelRating(value)}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      />
    </Box>
  );
}

Rating.defaultProps = {
  handelRating: () => {},
};
