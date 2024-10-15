import { Stack } from '@mui/material';
import BannerSlider from 'src/sections/common/banner';
import Discount from 'src/sections/common/discount';
import Explore from 'src/sections/common/explore';
import HotelArticle from 'src/sections/hotels/hotelArticle';
import FormFieldTour from 'src/sections/tours/formField';

const TourPage = () => {
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
      <FormFieldTour />
      <Discount type="tour" />
      <Explore />
      <HotelArticle />
    </Stack>
  );
};

export default TourPage;