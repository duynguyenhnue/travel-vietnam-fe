import { Stack } from '@mui/material';
import BannerSlider from 'src/sections/common/banner';
import Discount from 'src/sections/common/discount';
import FormFieldHotel from 'src/sections/hotels/formField';
import TextArticle from 'src/sections/hotels/hotelArticle';
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
  const data = {
    title: "Khám Phá Các Khách Sạn Tốt Nhất Tại Travel World",
    content: [
      {
        title: "Sản phẩm chủ yếu",
        content: [
          "Khách sạn sang trọng",
          "Khách sạn giá rẻ",
          "Khách sạn boutique",
          "Khách sạn nghỉ dưỡng",
        ]
      },
      {
        title: "Đặt Khách Sạn Tại Travel World",
        content: [
          "Tại Travel World, chúng tôi cung cấp dịch vụ đặt phòng khách sạn dễ dàng và nhanh chóng. Bạn chỉ cần thực hiện ba bước đơn giản: tìm kiếm khách sạn theo địa điểm và tiêu chí của bạn, chọn phòng phù hợp và hoàn tất thanh toán. Chúng tôi sẽ lo liệu mọi thứ còn lại để bạn có một kỳ nghỉ thoải mái.",
          "Chúng tôi hợp tác với nhiều khách sạn hàng đầu để mang đến cho bạn những lựa chọn tốt nhất, từ những khách sạn sang trọng đến những lựa chọn tiết kiệm. Đội ngũ nhân viên của chúng tôi luôn sẵn sàng hỗ trợ bạn trong việc tìm kiếm và đặt phòng.",
          "Hãy để Travel World giúp bạn tìm kiếm nơi lưu trú lý tưởng cho chuyến đi của bạn, đảm bảo bạn có những trải nghiệm tuyệt vời và đáng nhớ.",
        ]
      }
    ]
  }
  return (
    <Stack sx={{display: 'flex', flexDirection: 'column', gap: 5, mb: 5}}>
      <BannerSlider banners={banners} />
      <FormFieldHotel />
      <Discount type="hotel" />
      <ProposeHotel />
      <TextArticle data={ data } />
    </Stack>
  );
};

export default HotelPage;
