import { PersonaData } from '../types';

export const segmentationQuadrants = [
  {
    id: 'q1',
    code: 'Q1',
    title: 'Eco-conscious Daily Users',
    subtitle: 'Người dùng hương thơm hằng ngày, ưu tiên thuần chay & thiên nhiên',
    xPosition: 'high', // High Vegan Preference
    yPosition: 'high', // High Usage Frequency
    isPrimary: true,
    role: 'KEY SEGMENT',
    description: 'Sử dụng 5–6 ngày/tuần. Chủ động tìm hiểu thành phần, nguồn gốc minh bạch và cam kết thuần chay. Phù hợp trọn vẹn với định vị Cocoon.',
    color: '#586B46',
  },
  {
    id: 'q2',
    code: 'Q2',
    title: 'Eco-conscious Occasional Users',
    subtitle: 'Người dùng hương thơm theo dịp, ưu tiên thuần chay & thiên nhiên',
    xPosition: 'high', // High Vegan Preference
    yPosition: 'low',  // Low Usage Frequency
    isPrimary: false,
    role: 'SECONDARY SEGMENT',
    description: 'Sử dụng 0–2 ngày/tuần khi đi chơi, hẹn hò hoặc sự kiện. Đồng điệu về giá trị xanh; cần hoàn cảnh sử dụng rõ ràng và mini size để mua thử.',
    color: '#788764',
  },
  {
    id: 'q3',
    code: 'Q3',
    title: 'Conventional Occasional Users',
    subtitle: 'Người dùng hương thơm theo dịp, ít ưu tiên thuần chay',
    xPosition: 'low',
    yPosition: 'low',
    isPrimary: false,
    role: 'NON-PRIORITY',
    description: 'Tần suất thấp, chọn theo mùi và giá rẻ, ít quan tâm yếu tố xanh. Chưa phải đối tượng mục tiêu giai đoạn ra mắt.',
    color: '#8C8A84',
  },
  {
    id: 'q4',
    code: 'Q4',
    title: 'Fragrance Enthusiasts',
    subtitle: 'Người dùng hương thơm hằng ngày theo sở thích đại trà / bản sắc',
    xPosition: 'low',
    yPosition: 'high',
    isPrimary: false,
    role: 'POTENTIAL ADOPTERS',
    description: 'Đã có thói quen xịt hằng ngày. Quan tâm chất lượng mùi hương và độ bám tỏa hơn là nhãn thuần chay. Cần chứng minh chất lượng hương thơm thực tế.',
    color: '#D9AA45',
  },
];

export const personasData: PersonaData[] = [
  {
    id: 'persona-daily',
    segmentTitle: 'Eco-conscious Daily Users',
    segmentType: 'Key Segment (Q1)',
    age: '20–28 tuổi',
    gender: 'Nữ',
    occupation: 'Nhân viên văn phòng, sinh viên',
    income: '7–10 triệu đồng/tháng',
    location: 'Hà Nội, TP.HCM, Đà Nẵng và các đô thị lớn',
    lifestyle: 'Năng động, quan tâm chăm sóc cơ thể, thích cái đẹp tự nhiên và theo đuổi lối sống xanh lành mạnh.',
    behavior: [
      'Sử dụng body mist hoặc nước hoa đều đặn 5–6 ngày/tuần trước khi đi làm, đi học hay gặp bạn bè.',
      'Chủ động đọc bảng thành phần và tìm hiểu chứng nhận thuần chay (Vegan) trước khi mua.',
      'Khám phá sản phẩm mới qua TikTok, Instagram và các kênh đánh giá làm đẹp uy tín.',
      'Sẵn sàng chi trả cho sản phẩm chất lượng, an toàn cho làn da khi dùng thường xuyên.',
    ],
    goals: [
      'Duy trì hương thơm tươi mát, dễ chịu và tự tin suốt ngày làm việc năng động.',
      'Tìm kiếm mùi hương độc đáo, tự nhiên, không bị nồng gắt cồn hay hương liệu hóa học đại trà.',
      'Tự hào sử dụng thương hiệu mỹ phẩm thuần chay Việt Nam có trách nhiệm với môi trường.',
    ],
    drivers: [
      'Mong muốn chăm da kết hợp thơm cơ thể tiện lợi hằng ngày.',
      'Cam kết thuần chay không thử nghiệm động vật có chứng chỉ quốc tế.',
      'Nguyên liệu thực vật Việt Nam thân thuộc và tinh tế.',
    ],
    barriers: [
      'Lo ngại body mist nhanh bay mùi trong khí hậu nóng ẩm.',
      'Khó hình dung và chọn đúng mùi khi mua sắm trực tuyến.',
      'Nhạy cảm về chi phí nếu phải xịt dặm lại nhiều lần trong tháng.',
    ],
    fitScore: 'Rất cao (Trọng tâm chiến dịch)',
  },
  {
    id: 'persona-occasional',
    segmentTitle: 'Eco-conscious Occasional Users',
    segmentType: 'Secondary Segment (Q2)',
    age: '20–28 tuổi',
    gender: 'Nữ',
    occupation: 'Sinh viên, nhân viên mới đi làm',
    income: '5–8 triệu đồng/tháng',
    location: 'Các thành phố lớn',
    lifestyle: 'Trẻ trung, thích khám phá trải nghiệm mới, quan tâm bảo vệ môi trường nhưng tiêu dùng cân nhắc kỹ.',
    behavior: [
      'Sử dụng body mist 0–2 ngày/tuần, chủ yếu vào dịp đi chơi cuối tuần, hẹn hò, tiệc tùng hoặc sự kiện.',
      'Mua sản phẩm theo dịp đặc biệt hoặc khi có chương trình khuyến mãi, combo quà tặng hấp dẫn.',
      'Rất hào hứng với định dạng Mini Size 75ml dễ bỏ túi và mức giá vừa túi tiền.',
      'Tham khảo kỹ review của cộng đồng mạng trước khi quyết định chi tiêu.',
    ],
    goals: [
      'Trở nên nổi bật, chỉn chu và thu hút hơn trong các dịp gặp gỡ đặc biệt.',
      'Trải nghiệm mùi hương mới lạ với chi phí tiết kiệm, tránh lãng phí chai lớn ít dùng.',
      'Ủng hộ tinh thần “Người Việt dùng hàng Việt” thuần chay, lành tính.',
    ],
    drivers: [
      'Mức giá tiếp cận tốt (chai mini 129k và các bundle ưu đãi).',
      'Định vị thuần chay uy tín từ Cocoon.',
      'Thiết kế xinh xắn, tiện lợi mang theo trong túi xách.',
    ],
    barriers: [
      'Chưa hình thành thói quen dùng hương thơm mỗi ngày.',
      'Ngại chi tiền cho chai lớn vì sợ dùng không hết.',
      'Cần lý do rõ ràng để thêm một bước tạo hương vào sinh hoạt.',
    ],
    fitScore: 'Tiềm năng mở rộng (Thông qua Mini size & Combo)',
  },
];
