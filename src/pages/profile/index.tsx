import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  Container
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import BirthdayCakeIcon from '@mui/icons-material/Cake';
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Information from 'src/sections/profile/information';
import BookingHistory from 'src/sections/profile/bookingHistory';
import { useSelector } from 'src/redux/store';
import toast from 'react-hot-toast';

const ProfilePage = () => {
  const [mode, setMode] = useState<'information' | 'booking' | 'newsletter' | 'notification'>('information');
  const { user } = useSelector((state) => state.user);
  const [province, setProvince] = useState<string>("");
  useEffect(() => {
    const fetchProvinces = async (): Promise<void> => {
      try {
        const response = await fetch('https://esgoo.net/api-tinhthanh/1/0.htm');
        const data = await response.json();
        if (data && data.data && Array.isArray(data.data)) {
          for (const item of data.data) {
            if (item.id == user?.address.province) {
              setProvince(item.name);
            }
          }
        } 
      } catch (error: unknown) {
        toast.error(`Error fetching provinces: ${String(error)}`);
      }
    };

    fetchProvinces().catch((error: unknown) => {
      toast.error(`Error fetching provinces: ${String(error)}`);
    });
  }, []);
  return (
    <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
      <Box width="25%" bgcolor="white" p={2} borderRadius="8px" boxShadow="0 2px 10px rgba(0,0,0,0.1)">
        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
          <Avatar
            src="https://via.placeholder.com/100"
            sx={{ width: 100, height: 100, mb: 1 }}
          />
          <IconButton sx={{ position: 'relative', bottom: 30, left: 35, backgroundColor: 'white', p: 0.5 }}>
            <EditIcon fontSize="small" />
          </IconButton>
          <Typography variant="h6">{user?.fullName}</Typography>
          <Box display="flex" gap={1} mt={1}>
            <LocationOnIcon color="disabled" />
            <Typography variant="body2" color="textSecondary">{province}</Typography>
            <Divider orientation="vertical" flexItem />
            <BirthdayCakeIcon color="disabled" fontSize="small" />
            <Typography variant="body2" color="textSecondary">
                {user?.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : ''}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <List>
          <ListItem button onClick={() => setMode('information')} sx={{ cursor: 'pointer', backgroundColor: mode === 'information' ? 'primary.light' : 'transparent' }}>
            <ListItemText primary="Profile Informations" />
          </ListItem>
          <ListItem button onClick={() => setMode('booking')} sx={{ cursor: 'pointer', backgroundColor: mode === 'booking' ? 'primary.light' : 'transparent' }}>
            <ListItemText primary="Booking History" />
          </ListItem>
          <ListItem button onClick={() => setMode('newsletter')} sx={{ cursor: 'pointer', backgroundColor: mode === 'newsletter' ? 'primary.light' : 'transparent' }}>
            <ListItemText primary="Newsletter Subscription" />
          </ListItem>
          <ListItem button onClick={() => setMode('notification')} sx={{ cursor: 'pointer', backgroundColor: mode === 'notification' ? 'primary.light' : 'transparent' }}>
            <ListItemText primary="Manage Notifications" />
          </ListItem>
        </List>
      </Box>
      <Box flexGrow={1} ml={4}>
        {mode === 'information' && <Information />}
        {mode === 'booking' && <BookingHistory />}
      </Box>
    </Container>
  );
};

export default ProfilePage;
