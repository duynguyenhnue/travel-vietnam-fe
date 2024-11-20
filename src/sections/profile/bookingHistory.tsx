import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Divider,
  Card,
  CardActions,
  Button,
  CardContent,
  CardHeader
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';

function BookingHistory() {
  const { t } = useTranslation();
  // Dữ liệu giả lập cho lịch sử đặt chỗ
  const bookings = [
    { id: 'BK001', service: 'Consultation', date: '2024-10-20', time: '10:00 AM', status: 'Completed' },
    { id: 'BK002', service: 'Follow-up', date: '2024-10-22', time: '2:00 PM', status: 'Pending' },
    { id: 'BK003', service: 'Therapy Session', date: '2024-10-24', time: '4:00 PM', status: 'Cancelled' },
    { id: 'BK004', service: 'Consultation', date: '2024-10-25', time: '1:00 PM', status: 'Completed' },
  ];

  // Hàm trả về chip màu sắc dựa vào trạng thái
  const getStatusChip = (status: string) => {
    switch (status) {
      case 'Completed':
        return <Chip label={t(tokens.bookingHistory.completed)} color="success" />;
      case 'Pending':
        return <Chip label={t(tokens.bookingHistory.pending)} color="warning" />;
      case 'Cancelled':
        return <Chip label={t(tokens.bookingHistory.cancelled)} color="error" />;
      default:
        return <Chip label={status} />;
    }
  };

  return (
    <Box>
      <Card>
        <CardHeader 
          subheader={t(tokens.bookingHistory.filterSubheader)} 
          title={t(tokens.bookingHistory.title)} 
        />
        <Divider />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    {t(tokens.bookingHistory.bookingId)}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    {t(tokens.bookingHistory.service)}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    {t(tokens.bookingHistory.date)}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    {t(tokens.bookingHistory.time)}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    {t(tokens.bookingHistory.status)}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell align="center">{booking.id}</TableCell>
                    <TableCell align="center">{booking.service}</TableCell>
                    <TableCell align="center">{booking.date}</TableCell>
                    <TableCell align="center">{booking.time}</TableCell>
                    <TableCell align="center">{getStatusChip(booking.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">{t(tokens.profile.save)}</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default BookingHistory;
