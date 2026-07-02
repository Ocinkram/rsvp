import { useEffect, useState } from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    CircularProgress,
    Alert,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
} from "@mui/material";

import { readResponses } from "../functions";

export default function ResponsesList() {
    const [responses, setResponses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [search, setSearch] = useState("");

    const [open, setOpen] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState("");
    const [selectedName, setSelectedName] = useState("");

    useEffect(() => {
        const fetchResponses = async () => {
            try {
                setLoading(true);
                const data = await readResponses();
                setResponses(data || []);
            } catch (err) {
                setError(err.message || "Failed to load responses");
            } finally {
                setLoading(false);
            }
        };

        fetchResponses();
    }, []);

    const handleRowClick = (name, message) => {
        setSelectedName(name || "Unnamed Guest");
        setSelectedMessage(message || "No message provided.");
        setOpen(true);
    };

    const filteredResponses = responses.filter((r) =>
        `${r.name || ""} ${r.message || ""}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const totalGuests = filteredResponses.reduce(
        (sum, r) => sum + (Number(r.guestNumber) || 0),
        0
    );

    if (loading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 6,
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ p: 3 }}>
                <Alert severity="error">{error}</Alert>
            </Box>
        );
    }

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    p: 2,
                }}
            >
                <Card
                    sx={{
                        width: "100%",
                        maxWidth: 500,
                        borderRadius: 2,
                        display: "flex",
                        flexDirection: "column",
                        maxHeight: "calc(100vh - 32px)", // grows naturally until this height
                    }}
                >
                    <CardContent
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            flex: 1,
                            minHeight: 0,
                        }}
                    >
                        <Typography variant="h5" fontWeight={600} gutterBottom>
                            Responses
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 2 }}
                        >
                            View all submitted RSVP responses below.
                        </Typography>

                        {responses.length === 0 ? (
                            <Alert severity="info">
                                No responses found.
                            </Alert>
                        ) : (
                            <>
                                <TextField
                                    fullWidth
                                    size="small"
                                    placeholder="Search by name or message..."
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(e.target.value)
                                    }
                                    sx={{ mb: 2 }}
                                />

                                {filteredResponses.length === 0 ? (
                                    <Alert severity="info">
                                        No matching responses found.
                                    </Alert>
                                ) : (
                                    <TableContainer
                                        sx={{
                                            flex: 1,
                                            minHeight: 0,
                                            overflowY: "auto",
                                        }}
                                    >
                                        <Table stickyHeader>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>
                                                        <b>Name</b>
                                                    </TableCell>
                                                    <TableCell>
                                                        <b>Attendance</b>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <b>Guests</b>
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>

                                            <TableBody>
                                                {filteredResponses.map((r) => (
                                                    <TableRow
                                                        key={r.id}
                                                        hover
                                                        onClick={() =>
                                                            handleRowClick(
                                                                r.name,
                                                                r.message
                                                            )
                                                        }
                                                        sx={{
                                                            cursor: "pointer",
                                                            "&:hover": {
                                                                backgroundColor:
                                                                    "#f5f5f5",
                                                            },
                                                        }}
                                                    >
                                                        <TableCell>
                                                            <Typography
                                                                noWrap
                                                                sx={{
                                                                    maxWidth: 140,
                                                                    overflow:
                                                                        "hidden",
                                                                    textOverflow:
                                                                        "ellipsis",
                                                                }}
                                                            >
                                                                {r.name ||
                                                                    "Unnamed Guest"}
                                                            </Typography>
                                                        </TableCell>

                                                        <TableCell>
                                                            <Chip
                                                                size="small"
                                                                label={
                                                                    r.willAttend
                                                                        ? "Attending"
                                                                        : "Not Attending"
                                                                }
                                                                color={
                                                                    r.willAttend
                                                                        ? "success"
                                                                        : "error"
                                                                }
                                                            />
                                                        </TableCell>

                                                        <TableCell align="right">
                                                            {r.guestNumber || 0}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}

                                                <TableRow>
                                                    <TableCell colSpan={2}>
                                                        <b>Total Guests</b>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <b>{totalGuests}</b>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                )}
                            </>
                        )}
                    </CardContent>
                </Card>
            </Box>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>
                    <Typography
                        noWrap
                        sx={{
                            maxWidth: 300,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}
                    >
                        Message from {selectedName}
                    </Typography>
                </DialogTitle>

                <DialogContent>
                    <Typography sx={{ mt: 1 }}>
                        {selectedMessage}
                    </Typography>
                </DialogContent>
            </Dialog>
        </>
    );
}