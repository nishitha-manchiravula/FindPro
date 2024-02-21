import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  Switch,
  FormControl,
  FormGroup,
  FormControlLabel,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";

const components = { Hourly: "Hourly", Montly: "Montly", Annual: "Anual" };
const salaryTypesDefaultRates = [
  {
    type: "hourly",
    fixedRate: 24,
    range: {
      min: 24,
      max: 32,
    },
  },
  {
    type: "monthly",
    fixedRate: 3600,
    range: {
      min: 2600,
      max: 3600,
    },
  },
  {
    type: "annual",
    fixedRate: 80000,
    range: {
      min: 70000,
      max: 90000,
    },
  },
];

const Profile = () => {
  const [value, setValue] = useState(components.Hourly);
  const [switchLabel, setSwitchLabel] = useState(false);
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState({
    Hourly: true,
    Montly: false,
    Annual: false,
  });

  const handleSwitchChange = (event) => {
    setSwitchLabel(!switchLabel);
  };

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    JobTitle: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  //   const handleChange = (event, newValue) => {
  //     console.log(newValue, "newvalue");
  //     setValue(newValue);
  //   };
  return (
    <div>
      <Box
        sx={{ mb: 2 }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography>Profile Settings</Typography>
        {edit ? (
          <Box>
            <Button
              variant="contained"
              sx={{ color: "black", backgroundColor: "white" }}
              onClick={() => setEdit(!edit)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ color: "white", backgroundColor: "black", ml: 2 }}
            >
              Save Changes
            </Button>
          </Box>
        ) : (
          <Button
            variant="contained"
            size="small"
            onClick={() => setEdit(!edit)}
            sx={{ color: "white", backgroundColor: "black" }}
          >
            Edit
          </Button>
        )}
      </Box>
      <Divider />
      <Box>
        <Typography>Consultant Overview</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <TextField
          id="standard-basic"
          label="FIRST NAME"
          variant="standard"
          fullWidth
          sx={{ md: 4, mx: 1 }}
          disabled={!edit}
          name="FIRST NAME"
          onChange={handleChange}
        />
        <TextField
          id="standard-basic"
          label="LAST NAME"
          variant="standard"
          sx={{ md: 4, mx: 1 }}
          fullWidth
          disabled={!edit}
          name="LAST NAME"
          onChange={handleChange}
        />
        <TextField
          id="standard-basic"
          label="JOB TITLE"
          variant="standard"
          sx={{ md: 4, mx: 1 }}
          fullWidth
          disabled={!edit}
          name="JOB TITLE"
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography>Expected Salary </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography>Select Salary Type</Typography>
          <Box sx={{ width: "100%", display: "flex", my: 2 }}>
            <Button
              variant="outlined"
              onClick={() => {
                setValue(components.Hourly);
                setActive({ hourly: true, Montly: false, Annual: false });
              }}
              sx={{ mx: 2, color: active.Hourly ? "black" : "gray" }}
            >
              Hourly
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                setValue(components.Montly);
                setActive({ hourly: false, Montly: true, Annual: false });
              }}
              sx={{ mx: 2, color: active.Montly ? "black" : "gray" }}
            >
              Monthly
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                setValue(components.Annual);
                setActive({ hourly: false, Montly: false, Annual: true });
              }}
              sx={{ mx: 2, color: active.Annual ? "black" : "gray" }}
            >
              Annual
            </Button>
          </Box>
          <Divider />
          <Box>
            {value === components.Hourly && edit && (
              <Box>
                <Typography>Salary Value</Typography>
                <FormControl>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={switchLabel}
                          onChange={handleSwitchChange}
                        />
                      }
                      label="Fixed Rate"
                    />
                  </FormGroup>
                </FormControl>
                {switchLabel ? (
                  <Box display="flex">
                    <TextField
                      id="outlined-basic"
                      label="Hourly"
                      variant="standard"
                      size="small"
                      defaultValue={salaryTypesDefaultRates[0].range.min}
                      disabled={!edit}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">Min</InputAdornment>
                        ),
                      }}
                      sx={{ mx: 2 }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Hourly"
                      variant="standard"
                      size="small"
                      defaultValue={salaryTypesDefaultRates[0].range.max}
                      disabled={!edit}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">Max</InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                ) : (
                  <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                    <TextField
                      id="outlined-basic"
                      label="Montly"
                      variant="standard"
                      size="small"
                      defaultValue={salaryTypesDefaultRates[0].fixedRate}
                      disabled={!edit}
                    />
                    <Typography sx={{ ml: 2 }}>Hourly</Typography>
                  </Box>
                )}
              </Box>
            )}
            <Box>
              {value === components.Montly && edit && (
                <Box>
                  <Typography>Salary Value</Typography>
                  <FormControl>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={switchLabel}
                            onChange={handleSwitchChange}
                          />
                        }
                        label="Fixed Rate"
                      />
                    </FormGroup>
                  </FormControl>
                  {switchLabel ? (
                    <Box display="flex">
                      <TextField
                        id="outlined-basic"
                        label="Montly"
                        variant="standard"
                        size="small"
                        defaultValue={salaryTypesDefaultRates[1].range.min}
                        disabled={!edit}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">Min</InputAdornment>
                          ),
                        }}
                        sx={{ mx: 2 }}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Montly"
                        variant="standard"
                        size="small"
                        defaultValue={salaryTypesDefaultRates[1].range.max}
                        disabled={!edit}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">Max</InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  ) : (
                    <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                      <TextField
                        id="outlined-basic"
                        label="Montly"
                        variant="standard"
                        size="small"
                        defaultValue={salaryTypesDefaultRates[1].fixedRate}
                        disabled={!edit}
                      />
                      <Typography sx={{ ml: 2 }}>Montly</Typography>
                    </Box>
                  )}
                </Box>
              )}
              <Box>
                {value === components.Annual && edit && (
                  <Box>
                    <Typography>Salary Value</Typography>
                    <FormControl>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={switchLabel}
                              onChange={handleSwitchChange}
                            />
                          }
                          label="Fixed Rate"
                        />
                      </FormGroup>
                    </FormControl>
                    {switchLabel ? (
                      <Box display="flex">
                        <TextField
                          id="outlined-basic"
                          label="Montly"
                          variant="standard"
                          size="small"
                          defaultValue={salaryTypesDefaultRates[2].range.min}
                          disabled={!edit}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                Min
                              </InputAdornment>
                            ),
                          }}
                          sx={{ mx: 2 }}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Montly"
                          variant="standard"
                          size="small"
                          defaultValue={salaryTypesDefaultRates[2].range.max}
                          disabled={!edit}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                Max
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    ) : (
                      <Box
                        sx={{ display: "flex", alignItems: "center", mt: 3 }}
                      >
                        <TextField
                          id="outlined-basic"
                          label="Montly"
                          variant="standard"
                          size="small"
                          defaultValue={salaryTypesDefaultRates[2].fixedRate}
                          disabled={!edit}
                          onChange={handleChange}
                        />
                        <Typography sx={{ ml: 2 }}> Per Month</Typography>
                      </Box>
                    )}
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Profile;
