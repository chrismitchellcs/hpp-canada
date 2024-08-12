import { Grid, Stack } from "@mui/material";
import packaging from "data/packaging";
import React from "react";
import Package from "./Package";

const Packages = () => {
  return (
    <Grid container>
      {packaging.map((p) => {
        return (
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Package
              name={p.name}
              image={p.image}
              description={p.description}
            ></Package>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Packages;
