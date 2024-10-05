import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HotelArticle = () => {
  return (
    <Container maxWidth="xl">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h5" sx={{ textAlign: 'center', flex: 1 }}>Đặt phòng khách sạn tại Việt Nam trên Travel World</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
            Travel World – Lựa chọn hàng đầu khi đặt phòng khách sạn trực tuyến
          </Typography>
          <Typography variant="body1">
            Là đại lý đặt phòng khách sạn hàng đầu Đông Nam Á, kể từ khi ra mắt đến nay, Travel World đã giúp mọi chuyến du lịch của hơn 20 triệu tín đồ du lịch trở nên đơn giản hơn bao giờ hết. Không chỉ hoạt động tại Đông Nam Á, Travel World hiện là đối tác của trên 200.000 khách sạn toàn thế giới, sẵn sàng đồng hành cùng bạn mọi lúc mọi nơi.
          </Typography>
          <Typography variant="body1">
            Với mạng lưới khách sạn rộng khắp, Travel World mang đến vô vàn lựa chọn, đa dạng mọi phân khúc, từ khách sạn cao cấp, resort nghỉ dưỡng hàng đầu, đến các hostel, homestay hiện đại mà cá tính. Dù bạn phải đặt phòng gấp cho chuyến công tác, hay tìm kiếm một thiên đường trong mơ cho chuyến trăng mật lãng mạn, Travel World cũng sẽ khiến bạn hài lòng với những khách sạn tốt nhất và mức giá ưu đãi nhất.
          </Typography>
          <Typography variant="body1">
            Tất cả những gì bạn cần làm là ba bước: tìm kiếm, đặt phòng khách sạn và thanh toán. Mọi thứ còn lại đã có Travel World lo liệu.
          </Typography>
        </AccordionDetails>

      </Accordion>
    </Container>
  );
};

export default HotelArticle;
