import { useState , useEffect} from "react";
import { Box, Stack, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { SectionHeader } from './ui/SectionHeader';

const targetDate = new Date('2026-08-12T14:00:00');

export const CountdownTimer =() => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const calculateTimeLeft = () => {
			const difference = targetDate.getTime() - new Date().getTime();
			if (difference > 0) {
				setTimeLeft({
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
					minutes: Math.floor((difference / 1000 / 60) % 60),
					seconds: Math.floor((difference / 1000) % 60),
				});
			}
		};

		calculateTimeLeft();
		const timer = setInterval(calculateTimeLeft, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	return (
		<Stack alignItems="center" gap={{ xs: 4, md: 6 }} py={{ xs: 4, md: 8 }}>
            <SectionHeader
                title="Countdown to Our Special Day"
                icon={<CalendarTodayIcon sx={{ fontSize: 28, color: 'primary.main' }} />}
                compact
            />
            <Box display='flex' gap={{ xs: 2, sm: 4, md: 8 }} flexWrap="wrap" justifyContent="center">
                {Object.entries(timeLeft).map(([unit, value]) => (
                <Stack key={unit} gap={2} alignItems="center">
                    <Box
                        width={{ xs: 64, md: 80 }}
                        height={{ xs: 64, md: 80 }}
                        borderRadius={2}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            backgroundColor: 'primary.main',
                            color: 'primary.contrastText',
                            fontSize: { xs: '2rem', md: '3rem' },
                        }}
                    >
                        {value}
                    </Box>
                    <Typography fontStyle='italic' variant="body2" color="primary" sx={{ textTransform: 'capitalize' }}>
                        {unit}
                    </Typography>
                </Stack>
                ))}
            </Box>
			<Typography variant="body1" fontStyle='italic' color="text.secondary" textAlign="center" sx={{ px: 2 }}>
                We can't wait to share our day with you.
            </Typography>
		</Stack>
	);
}
