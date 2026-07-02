import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { createUser } from "../functions";

export const AddUser = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setSnackbar({
        open: true,
        severity: "error",
        message: "Name is required.",
      });
      return;
    }

    try {
      setLoading(true);

      await createUser({ name });

      setSnackbar({
        open: true,
        severity: "success",
        message: "User created successfully!",
      });

      setName("");
    } catch (error) {
      console.error(error);

      setSnackbar({
        open: true,
        severity: "error",
        message: "Failed to create user.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Card sx={{ width: "100%", maxWidth: 500, borderRadius: 2 }}>
          <CardContent sx={{ p: 2 }}>
            <Typography variant="h6" fontWeight={600}>
              Add Guest
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              Enter the guest's name.
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                required
                size="small"
                label="Name"
                placeholder="Enter guest name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 1,
                }}
              >
                <Button
                  variant="outlined"
                  size="small"
                  disabled={loading}
                  onClick={() => setName("")}
                >
                  Clear
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  disabled={loading}
                  startIcon={
                    loading ? (
                      <CircularProgress size={16} color="inherit" />
                    ) : null
                  }
                >
                  {loading ? "Creating..." : "Create"}
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() =>
          setSnackbar((prev) => ({
            ...prev,
            open: false,
          }))
        }
      >
        <Alert
          severity={snackbar.severity}
          variant="filled"
          onClose={() =>
            setSnackbar((prev) => ({
              ...prev,
              open: false,
            }))
          }
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};