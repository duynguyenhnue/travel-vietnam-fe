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

function BookingHistory() {
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
        return <Chip label="Completed" color="success" />;
      case 'Pending':
        return <Chip label="Pending" color="warning" />;
      case 'Cancelled':
        return <Chip label="Cancelled" color="error" />;
      default:
        return <Chip label={status} />;
    }
  };

  return (
    <Box>
      <Card>
        <CardHeader subheader="You can filter booking history by date" title="Booking History" />
        <Divider />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Booking ID</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Service</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Date</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Time</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Status</TableCell>
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
          <Button variant="contained">Save</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default BookingHistory;
