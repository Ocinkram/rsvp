import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
    Box,
    Stack,
    TextField,
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
    Alert,
    Paper,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { createResponse, readResponse, updateResponse } from '../functions';
import { sectionTitleSx } from './ui/headingStyles';

export const RSVPForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loader, setLoader] = useState(false)
    const [hasPreviousData, setHasPreviousData] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm();

    const userId = '123456sfdfdgfdgdfgds7fds89'

    const onSubmit = async (data) => {
        if (hasPreviousData) {
            const res = await updateResponse({
                userId,
                name: data.name,
                willAttend: !!data.willAttend,
                guestNumber: Number(data.guestNumber),
                message: data.message,
            });

            if (res) {
                setHasPreviousData(true)
                setIsSubmitted(true)
            }
        } else {
            const res = await createResponse({
                userId,
                name: data.name,
                willAttend: !!data.willAttend,
                guestNumber: Number(data.guestNumber),
                message: data.message,
            });
            if (res) {
                setHasPreviousData(true)
                setIsSubmitted(true)
            }
        }
    };

    const fetchResponse = async () => {
        const user = await readResponse({ userId })
        if (!user) return
        reset({
            name: user.name,
            willAttend: !!user.willAttend,
            guestNumber: user.guestNumber,
            message: user.message,
        });
        setHasPreviousData(true)
        setIsSubmitted(true)
    };


    useEffect(() => {
        fetchResponse()
    }, [])

    if (isSubmitted) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="50vh"
            >
                <Paper
                    elevation={3}
                    sx={{
                        p: { xs: 3, sm: 5 },
                        width: "100%",
                        maxWidth: 480,
                        textAlign: "center",
                    }}
                >
                    <Stack spacing={3} alignItems="center">
                        <CheckCircleIcon
                            sx={{
                                fontSize: { xs: 56, md: 72 },
                                color: "primary.main",
                            }}
                        />

                            <Typography sx={sectionTitleSx}>
                                Thank You!
                            </Typography>

                        <Typography variant="body1" color="text.secondary">
                            Your RSVP has been received. We're so excited to
                            celebrate with you!
                        </Typography>

                        <Alert
                            severity="success"
                            sx={{
                                width: "100%",
                                justifyContent: "center",
                            }}
                        >
                            RSVP submitted successfully.
                        </Alert>

                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={2}
                            width="100%"
                        >
                            <Button
                                fullWidth
                                variant="outlined"
                                color="primary"
                                onClick={() => setIsSubmitted(false)}
                                sx={{
                                    "&:hover": {
                                        bgcolor: "#f6f7f4",
                                    },
                                }}
                            >
                                Edit RSVP
                            </Button>
                        </Stack>
                    </Stack>
                </Paper>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                py: { xs: 3, md: 5 },
            }}
        >
            <Paper
                elevation={2}
                sx={{
                    width: "100%",
                    maxWidth: 600,
                    p: { xs: 3, sm: 4 },
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Stack spacing={3}>
                        {/* Name */}
                        <Stack spacing={1}>
                            <Typography variant="caption">
                                Full Name *
                            </Typography>

                            <TextField
                                fullWidth
                                {...register("name", {
                                    required: "Name is required",
                                })}
                                error={!!errors.name}
                                helperText={errors.name?.message}
                            />
                        </Stack>

                        <Controller
                            name="willAttend"
                            control={control}
                            rules={{
                                validate: value =>
                                    value !== undefined || "Please select an option",
                            }}
                            render={({ field }) => (
                                <RadioGroup
                                    value={String(field.value)}
                                    onChange={(e) => field.onChange(e.target.value === "true")}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', sm: 'row' },
                                        gap: { xs: 0, sm: 2 },
                                    }}
                                >
                                    <FormControlLabel
                                        value="true"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                    />

                                    <FormControlLabel
                                        value="false"
                                        control={<Radio color="primary" />}
                                        label="No"
                                    />
                                </RadioGroup>
                            )}
                        />

                        {/* Number of Guests */}
                        <Stack spacing={1}>
                            <Typography variant="caption">
                                Number of Attendees *
                            </Typography>

                            <TextField
                                type="text"
                                inputProps={{
                                    inputMode: "numeric",
                                    maxLength: 1,
                                }}
                                fullWidth
                                onChange={(e) => {
                                    const value = e.target.value;

                                    // allow only 1–9 or empty (so user can delete)
                                    if (/^[1-9]?$/.test(value)) {
                                        setValue("guestNumber", value, {
                                            shouldValidate: true,
                                        });
                                    }
                                }}
                                {...register("guestNumber", {
                                    required: "Number is required",
                                    validate: (value) =>
                                        /^[1-9]$/.test(value) || "Must be between 1 and 9",
                                })}
                                error={!!errors.guestNumber}
                                helperText={errors.guestNumber?.message}
                            />
                        </Stack>

                        {/* Message */}
                        <Stack spacing={1}>
                            <Typography variant="caption">
                                Message for the Couple
                            </Typography>

                            <TextField
                                placeholder="Share your well wishes..."
                                multiline
                                rows={4}
                                fullWidth
                                {...register("message")}
                            />
                        </Stack>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                            sx={{ mt: 1 }}
                        >
                            Submit RSVP
                        </Button>
                    </Stack>
                </Box>
            </Paper>
        </Box>
    );
}
