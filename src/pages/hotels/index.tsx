import { Stack } from '@mui/material';
import BannerSlider from 'src/sections/common/banner';
import Discount from 'src/sections/common/discount';
import FormFieldHotel from 'src/sections/hotels/formField';
import HotelArticle from 'src/sections/hotels/hotelArticle';
import ProposeHotel from 'src/sections/hotels/propose';

const HotelPage = () => {
  const banners = [
    {
      image: 'https://tse4.mm.bing.net/th?id=OIG3.qmznknFATLAIp6yx0kfO&pid=ImgGn',
      link: '', 
    },
    {
      image: 'https://tse2.mm.bing.net/th?id=OIG3.zJ.ycowDWuXmeTFHdDgT&pid=ImgGn',
      link: '', 
    },
    {
      image: 'https://tse3.mm.bing.net/th?id=OIG1.syaY908k4ES41rygJwVB&pid=ImgGn',
      link: '', 
    },
  ];
  return (
    <Stack sx={{display: 'flex', flexDirection: 'column', gap: 5, mb: 5}}>
      <BannerSlider banners={banners} />
      <FormFieldHotel />
      <Discount type="hotel" />
      <ProposeHotel />
      <HotelArticle />
    </Stack>
  );
};

export default HotelPage;
