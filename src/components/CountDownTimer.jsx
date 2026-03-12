import { useState , useEffect} from "react";
import { Box, Stack, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

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
		<Stack alignItems="center" gap={6} py={8} >
            <Box display='flex' alignItems="center" gap={2}>
                <CalendarTodayIcon sx={{ fontSize: 24, color: '#869478' }} />
                <Typography variant="h5" fontWeight={600} fontFamily='"Cormorant Garamond", serif' sx={{ color: '#869478' }}>
                Countdown to Our Special Day
                </Typography>
            </Box>
            <Box display='flex' gap={{ xs: 4, md: 8 }}>
                {Object.entries(timeLeft).map(([unit, value]) => (
                <Stack key={unit} gap={2} alignItems="center">
                    <Box width={{ xs: 64, md: 80 }} height={{ xs: 64, md: 80 }} borderRadius={2} display="flex" alignItems="center" justifyContent="center" sx={{ backgroundColor: '#869478', color: '#E4E2E0', fontSize: { xs: '2rem', md: '3rem' } }} > {value} </Box>
                    <Typography fontStyle='italic' fontFamily='"Cormorant Garamond", serif' variant="body2" sx={{ color: '#869478', textTransform: 'capitalize' }} > {unit} </Typography>
                </Stack>
                ))}
            </Box>
			<Typography variant="h6" fontStyle='italic' fontFamily='"Cormorant Garamond", serif' sx={{ color: '#869478' }}>
                We can't wait to share our day with you.
                </Typography>
		</Stack>
	);
}
