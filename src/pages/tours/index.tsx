import { Stack } from '@mui/material';
import BannerSlider from 'src/sections/common/banner';
import Discount from 'src/sections/common/discount';
import Explore from 'src/sections/common/explore';
import TextArticle from 'src/sections/hotels/hotelArticle';
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
  const data = {
    title: "Khám Phá Các Tour Du Lịch Đặc Sắc Tại Travel World",
    content: [
      {
        title: "Giới thiệu về Tour Du Lịch",
        content: [
          "Travel World tự hào mang đến cho bạn những trải nghiệm du lịch tuyệt vời nhất với các tour du lịch đa dạng và phong phú. Chúng tôi cung cấp các tour từ những điểm đến nổi tiếng đến những địa điểm ít người biết đến, giúp bạn khám phá vẻ đẹp của thiên nhiên và văn hóa địa phương.",
          "Với đội ngũ hướng dẫn viên chuyên nghiệp và nhiệt tình, chúng tôi cam kết mang đến cho bạn những trải nghiệm đáng nhớ. Mỗi tour đều được thiết kế tỉ mỉ, đảm bảo bạn sẽ có những khoảnh khắc tuyệt vời bên gia đình và bạn bè.",
          "Chúng tôi cũng cung cấp các tour du lịch đặc biệt, bao gồm tour mạo hiểm, tour văn hóa, và tour ẩm thực, giúp bạn có cơ hội trải nghiệm những điều mới mẻ và thú vị. Hãy để Travel World đồng hành cùng bạn trong hành trình khám phá thế giới.",
        ]
      },
      {
        title: "Lợi Ích Khi Đặt Tour Tại Travel World",
        content: [
          "Khi đặt tour tại Travel World, bạn sẽ được hưởng nhiều lợi ích như giá cả hợp lý, dịch vụ khách hàng tận tâm và linh hoạt trong việc thay đổi lịch trình. Chúng tôi luôn lắng nghe và đáp ứng nhu cầu của bạn để đảm bảo chuyến đi của bạn diễn ra suôn sẻ.",
          "Ngoài ra, chúng tôi còn cung cấp các gói tour kết hợp với các dịch vụ khác như đặt phòng khách sạn, vé máy bay, và các hoạt động giải trí, giúp bạn tiết kiệm thời gian và công sức trong việc lên kế hoạch cho chuyến đi.",
          "Hãy đến với Travel World để trải nghiệm những tour du lịch tuyệt vời và khám phá những điều kỳ diệu mà thế giới mang lại.",
        ]
      }
    ]
  }
  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column', gap: 5, mb: 5 }}>
      <BannerSlider banners={banners} />
      <FormFieldTour />
      <Discount type="tour" />
      <Explore />
      <TextArticle data={ data } />
    </Stack>
  );
};

export default TourPage;
