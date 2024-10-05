import { Stack } from '@mui/material';
import BannerSlider from 'src/sections/hotels/banner';
import Discount from 'src/sections/hotels/discount';
import FormFieldHotel from 'src/sections/hotels/formField';
import HotelArticle from 'src/sections/hotels/hotelArticle';
import ProposeHotel from 'src/sections/hotels/propose';

const HotelPage = () => {
  return (
    <Stack sx={{display: 'flex', flexDirection: 'column', gap: 5}}>
      <BannerSlider />
      <FormFieldHotel />
      <Discount />
      <ProposeHotel />
      <HotelArticle />
    </Stack>
  );
};

export default HotelPage;
