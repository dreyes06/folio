import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { render } from '@testing-library/react';

export default function Nav() {
  return (
    <AppBar>
      <Typography variant="h6" >
        News
      </Typography>
    </AppBar>
  );
}
