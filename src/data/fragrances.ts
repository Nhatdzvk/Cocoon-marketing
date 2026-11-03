import { Fragrance } from '../types';

export const fragrancesData: Fragrance[] = [
  {
    id: 'spring-rose',
    seasonKey: 'spring',
    seasonVi: 'Mùa Xuân',
    seasonEn: 'Spring',
    name: 'Hoa hồng Cao Bằng',
    botanicalOrigin: 'Vườn hồng hữu cơ Cao Bằng',
    mood: 'Fresh & Blooming',
    accentColor: '#D9AA45', // Vàng tươi
    accentBg: '#FBF6EA',
    secondaryColor: '#D59AA5', // Sắc hồng hoa
    topNote: {
      title: 'Hương đầu (Top Note)',
      description: 'Nụ hồng và lá non — Thoảng nét hoa hồng trong trẻo, điểm sắc xanh mơn mởn, gợi khu vườn vừa thức giấc sau làn sương sớm.',
    },
    midNote: {
      title: 'Hương giữa (Heart Note)',
      description: 'Hoa hồng Cao Bằng chủ đạo, điểm hoa nhài — Sắc hoa bung nở mềm mại, thanh thoát và tự nhiên.',
    },
    baseNote: {
      title: 'Hương cuối (Base Note)',
      description: 'Nốt trà dịu nhẹ — Khép lại thanh tao, mềm mại, cân bằng hoàn hảo độ ngọt của các tầng hương hoa.',
    },
    vibe: 'Trong trẻo, trẻ trung, nữ tính, không quá ngọt; gợi cảm xúc tươi mới, tràn đầy sức sống của mùa xuân.',
    targetMoments: ['Trước khi đi làm hoặc đi học', 'Đi dạo phố, gặp gỡ bạn bè', 'Buổi sáng cần cảm giác tươi mát, phấn chấn'],
    rationale: 'Cocoon đã khai thác thành công hoa hồng Cao Bằng trong danh mục Skincare (nước hoa hồng, thạch hoa hồng), tạo nền tảng vững chắc để mở rộng sang tạo hương cơ thể.',
    strategicRole: 'Bổ sung lựa chọn hương hoa tươi dễ tiếp cận cho người trẻ muốn thơm nhẹ, chỉn chu và nữ tính hằng ngày; khẳng định bản sắc thực vật Việt Nam.',
    specs: {
      longevity: '2–3 giờ (định hướng phát triển)',
      sillage: '0,3–0,5 mét (thoang thoảng cá nhân)',
      packaging: 'Chai PET tái chế 250ml & 75ml, vòi xịt phun sương siêu mịn',
      pricingFull: '329.000 VNĐ / 250ml',
      pricingMini: '129.000 VNĐ / 75ml',
      disclaimer: 'Chỉ tiêu phát triển đề xuất, cần xác nhận qua R&D và thử nghiệm lâm sàng',
    },
  },
  {
    id: 'summer-lotus',
    seasonKey: 'summer',
    seasonVi: 'Mùa Hạ',
    seasonEn: 'Summer',
    name: 'Sen Hậu Giang',
    botanicalOrigin: 'Đầm sen Hậu Giang miền Tây Nam Bộ',
    mood: 'Fresh & Radiant',
    accentColor: '#E7B8C3', // Hồng nhẹ hoa sen
    accentBg: '#FAF2F4',
    secondaryColor: '#586B46', // Xanh lá sen
    topNote: {
      title: 'Hương đầu (Top Note)',
      description: 'Chanh xanh và sắc lá sen non — Mở đầu tươi sáng với chút chanh thanh nhẹ, quyện nét xanh dịu của lá sen để đánh thức giác quan.',
    },
    midNote: {
      title: 'Hương giữa (Heart Note)',
      description: 'Hoa sen Hậu Giang chủ đạo — Tỏa hương mềm mại, trong trẻo như cánh hoa còn đọng sương, tiết chế độ phấn để giữ nét hiện đại.',
    },
    baseNote: {
      title: 'Hương cuối (Base Note)',
      description: 'Trà thanh và gỗ đàn hương mềm nhẹ — Nét trà nối tiếp trên nền gỗ mịn, tạo chiều sâu gợi cảm nhưng vẫn giữ tổng thể nhẹ thoáng mát lành.',
    },
    vibe: 'Tươi mát, trong trẻo, rạng rỡ, có chiều sâu gợi cảm; cảm giác giải nhiệt làn da giữa mùa hè oi ả.',
    targetMoments: ['Ngày hè nóng ẩm đi làm, dạo phố', 'Du lịch biển, picnic dã ngoại', 'Hẹn hò nhẹ nhàng buổi tối mùa hè'],
    rationale: 'Kế thừa nguyên liệu sen Hậu Giang trong danh mục chăm sóc da của Cocoon, mở rộng sang tạo hương với hoa sen là bản sắc xuyên suốt.',
    strategicRole: 'Đại diện mùa Hè bằng dấu ấn sen trong – lá xanh – gỗ mềm; cầu nối để khách hàng yêu thích dòng sen khám phá Body Mist.',
    specs: {
      longevity: '2–3 giờ (định hướng phát triển)',
      sillage: '0,3–0,5 mét (thoang thoảng cá nhân)',
      packaging: 'Chai PET tái chế 250ml & 75ml, vòi xịt phun sương tán rộng',
      pricingFull: '329.000 VNĐ / 250ml',
      pricingMini: '129.000 VNĐ / 75ml',
      disclaimer: 'Chỉ tiêu phát triển đề xuất, cần xác nhận qua R&D và thử nghiệm lâm sàng',
    },
  },
  {
    id: 'autumn-pomelo',
    seasonKey: 'autumn',
    seasonVi: 'Mùa Thu',
    seasonEn: 'Autumn',
    name: 'Bưởi Việt',
    botanicalOrigin: 'Vỏ bưởi và hoa bưởi truyền thống Việt Nam',
    mood: 'Soft & Elegant',
    accentColor: '#A7B86A', // Xanh vỏ bưởi
    accentBg: '#F5F7EC',
    secondaryColor: '#788764', // Cỏ hương bài ấm
    topNote: {
      title: 'Hương đầu (Top Note)',
      description: 'Vỏ bưởi chín mọng — Hé mở nét thơm tinh khôi của lớp vỏ bưởi vừa bóc, điểm chút đắng thanh đặc trưng kích thích khứu giác.',
    },
    midNote: {
      title: 'Hương giữa (Heart Note)',
      description: 'Hoa bưởi trắng chủ đạo — Từng lớp hương hoa bung nở, trong trẻo và ngọt dịu như những cánh hoa bưởi sớm thu.',
    },
    baseNote: {
      title: 'Hương cuối (Base Note)',
      description: 'Cỏ hương bài Việt Nam điểm nốt hoa trà — Sắc cỏ khô phảng phất nâng đỡ dư hương bưởi, vương vấn thanh lịch trên da.',
    },
    vibe: 'Thanh lịch, sang trọng kín đáo, nữ tính dịu dàng; mang vẻ duyên dáng của một chiều thu se lạnh.',
    targetMoments: ['Môi trường công sở trang nhã', 'Gặp gỡ đối tác hoặc dự tiệc nhẹ', 'Dùng bữa tối, hẹn hò lãng mạn'],
    rationale: 'Cocoon đã ghi dấu ấn mạnh mẽ với tinh dầu bưởi trong danh mục Haircare (nước dưỡng tóc bưởi bán chạy hàng đầu).',
    strategicRole: 'Tận dụng độ nhận diện cực cao của mùi hương bưởi quen thuộc để thu hút tệp khách hàng tìm kiếm body mist thanh lịch hằng ngày.',
    specs: {
      longevity: '2–3 giờ (định hướng phát triển)',
      sillage: '0,3–0,5 mét (thoang thoảng cá nhân)',
      packaging: 'Chai PET tái chế 250ml & 75ml, vòi xịt phun sương siêu mịn',
      pricingFull: '329.000 VNĐ / 250ml',
      pricingMini: '129.000 VNĐ / 75ml',
      disclaimer: 'Chỉ tiêu phát triển đề xuất, cần xác nhận qua R&D và thử nghiệm lâm sàng',
    },
  },
  {
    id: 'winter-coffee',
    seasonKey: 'winter',
    seasonVi: 'Mùa Đông',
    seasonEn: 'Winter',
    name: 'Cà phê Đắk Lắk',
    botanicalOrigin: 'Hạt cà phê Robusta nguyên chất Đắk Lắk',
    mood: 'Warm & Comforting',
    accentColor: '#6B4936', // Nâu cà phê rang
    accentBg: '#F7F3EE',
    secondaryColor: '#D9AA45', // Cam ngọt & kem
    topNote: {
      title: 'Hương đầu (Top Note)',
      description: 'Cam ngọt — Hương cam mọng nước mở đầu tươi sáng, ngọt thanh dẫn dắt nhịp nhàng vào hương cà phê rang ấm áp.',
    },
    midNote: {
      title: 'Hương giữa (Heart Note)',
      description: 'Cà phê rang Đắk Lắk — Hiện lên ấm áp, đậm vừa, mang chút đắng duyên dáng và cảm giác thân quen của một góc quán quen.',
    },
    baseNote: {
      title: 'Hương cuối (Base Note)',
      description: 'Gỗ đàn hương êm ái — Nét gỗ mềm mịn, ấm dịu ôm trọn dư hương cà phê, để lại cảm giác trầm êm như chiếc khăn len ngày đông.',
    },
    vibe: 'Ấm áp, gần gũi, thư thái, có cá tính riêng; phù hợp phong cách unisex hiện đại.',
    targetMoments: ['Những ngày thời tiết se lạnh mùa đông', 'Làm việc tập trung, đọc sách tại quán cà phê', 'Dạo phố tối mùa đông, sum họp bạn bè'],
    rationale: 'Cocoon đang dẫn đầu phân khúc với Tẩy da chết cà phê Đắk Lắk và Bơ dưỡng thể cà phê — sản phẩm hero làm nên tên tuổi thương hiệu.',
    strategicRole: 'Tạo trải nghiệm hương thơm đồng bộ hoàn hảo với routine chăm sóc cơ thể sẵn có; kích thích hành vi mua kèm (bundle cross-sell).',
    specs: {
      longevity: '2–3 giờ (định hướng phát triển)',
      sillage: '0,3–0,5 mét (thoang thoảng cá nhân)',
      packaging: 'Chai PET tái chế 250ml & 75ml, vòi xịt phun sương tỏa đều',
      pricingFull: '329.000 VNĐ / 250ml',
      pricingMini: '129.000 VNĐ / 75ml',
      disclaimer: 'Chỉ tiêu phát triển đề xuất, cần xác nhận qua R&D và thử nghiệm lâm sàng',
    },
  },
];
