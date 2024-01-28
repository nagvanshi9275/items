import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Main = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={12}>
        <Paper style={{ padding: 16, textAlign: 'center', color: 'white', background: 'blue' }}>
          Item 1
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Paper style={{ padding: 16, textAlign: 'center', color: 'white', background: 'green' }}>
          Item 2
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Paper style={{ padding: 16, textAlign: 'center', color: 'white', background: 'orange' }}>
          Item 3
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Main;
