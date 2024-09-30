import { TextField, Box, Stack, Pagination, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'src/redux/store';
import debounce from 'lodash.debounce';
import HotelBooking from 'src/sections/hotels/hotel-booking';
import { searchHotel } from 'src/redux/slices/hotels';

const HotelPages = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const { hotels, total } = useSelector((state) => state.hotels);
  const dispatch = useDispatch();

  const debouncedSearchLocations = debounce((term: string) => {
    dispatch(searchHotel({ name: term, limit: 6, page: 0 }));
  }, 600);

  useEffect(() => {
    dispatch(searchHotel({ name: searchTerm, limit: 6, page: page }));
  }, [page]);

  useEffect(() => {
    debouncedSearchLocations(searchTerm);

    return () => {
      debouncedSearchLocations.cancel();
    };
  }, [searchTerm, dispatch]);

  return (
    <Stack spacing={3}>
      <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
        <TextField
          label={t(tokens.common.hotels)}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: '30%', minWidth: '280px', minHeight: '56px' }}
        />
      </Box>
      <Stack spacing={4}>
        <HotelBooking hotels={hotels} />
      </Stack>
      {Math.ceil(total / 6) > 1 ? (
        <Pagination
          count={Math.ceil(total / 6)}
          variant="outlined"
          onChange={(e, page) => setPage(page - 1)}
          sx={{
            '& > ul': {
              justifyContent: 'center',
              padding: '16px 0',
            },
          }}
        />
      ) : (
        <Typography
          variant="h6"
          align="center"
        >
          No more hotels
        </Typography>
      )}
    </Stack>
  );
};

export default HotelPages;
