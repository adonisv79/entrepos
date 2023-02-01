import { Padding } from "@mui/icons-material";
import { InputLabel, Input, Button, FormControl, FormHelperText, TextField, Typography, Box, Grid, Tooltip } from "@mui/material";
import { Container } from "@mui/system";

export default () => (

  <Grid
    container
    direction="column"
    alignItems="center"
    justifyContent="center"
  >
    <Grid item xs={12}>
      <Typography variant="subtitle1" color="primary" align="center">
        Seems like you are not associated with any enterprise yet...
      </Typography>
      <Typography variant="h4" color="primary" align="center">
        Create your first Enterprise
      </Typography>
      <Box
        maxWidth="s"
        display="grid"
        justifyContent="center"
        alignItems="center"
        sx={{ width: '100%', justifyContent: 'center', padding: '10px' }}
      >
        <Tooltip title="the enterprise code is a unique identifier for your enterprise. it can only contain lower-cased letters with no spaces, numbers or special characters" arrow>
          <TextField variant="outlined" label="Enterprise Code" id="enterprise_code" sx={{ minWidth: '300px', margin: '10px'  }} />
        </Tooltip>
        <Tooltip title="Descriptive name of your enterprise" arrow>
          <TextField variant="outlined" label="Enterprise Name" id="enterprise_name" sx={{ minWidth: '300px', margin: '10px'  }} />
        </Tooltip>
        <Button aria-describedby="my-helper-text" variant="contained" sx={{ minWidth: '300px', margin: '10px'  }}>CREATE NEW ENTERPRISE</Button>
      </Box>
    </Grid>
  </Grid>
)