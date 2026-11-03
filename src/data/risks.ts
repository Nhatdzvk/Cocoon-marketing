import { RiskItem } from '../types';

export const risksData: RiskItem[] = [
  {
    id: 'risk-inventory',
    title: 'Quản lý hàng tồn kho chưa hợp lý',
    riskDescription: 'Dự báo nhu cầu không chính xác có thể dẫn đến tình trạng thiếu hàng ở mùi hot hoặc tồn kho quá nhiều ở mùi kén khách.',
    mitigation: [
      'Theo dõi sát sao doanh số bán ra theo từng dung tích (250ml vs 75ml) và theo từng mùi hương theo tuần.',
      'Áp dụng quy trình sản xuất linh hoạt theo lô vừa (lean batching), lập kế hoạch nhập nguyên liệu theo mùa vụ thực tế.',
      'Sử dụng các chương trình bundle (Vườn Hương, Ươm Hương) để điều hòa lượng xuất kho giữa 4 mùi.',
    ],
    probability: 'Medium',
    impact: 'High',
    earlyWarningIndicator: 'Chênh lệch tồn kho/bán ra giữa các mùi hương vượt quá 25% sau 3 tuần ra mắt.',
  },
  {
    id: 'risk-acceptance',
    title: 'Mức độ đón nhận thị trường (Market Acceptance)',
    riskDescription: 'Khách hàng chưa quen với Cocoon trong vai trò thương hiệu hương thơm, hoặc có e ngại về độ lưu hương và mùi hương mới.',
    mitigation: [
      'Đẩy mạnh chương trình sampling miễn phí và quầy tester đầy đủ tại chuỗi Guardian, Watsons, Sammi Shop.',
      'Cung cấp định dạng Mini Size 75ml (129k) và chính sách “Try Before Opening” cho đơn online.',
      'Thu thập phản hồi người dùng liên tục và cải tiến công thức mượt mà nếu cần.',
    ],
    probability: 'Medium',
    impact: 'High',
    earlyWarningIndicator: 'Tỷ lệ khách hàng mua lại hoặc chuyển từ mini size sang full size đạt dưới 10% sau 60 ngày.',
  },
  {
    id: 'risk-cost',
    title: 'Chi phí Marketing vượt ngân sách',
    riskDescription: 'Chi phí booking KOL/KOC, chạy quảng cáo chuyển đổi và chi phí tài trợ booth vượt ngoài dự toán ban đầu.',
    mitigation: [
      'Phân bổ ngân sách theo từng giai đoạn triển khai (Awareness 40%, Experience 35%, Sustain 25%).',
      'Ưu tiên hợp tác lại với mạng lưới đối tác KOL/KOC thân thiết đã từng đồng hành với Cocoon.',
      'Khuyến khích nội dung do người dùng tự tạo (UGC) thông qua review nhận hoàn tiền, tích điểm Hội Hóa Bướm.',
    ],
    probability: 'High',
    impact: 'Medium',
    earlyWarningIndicator: 'Tỷ lệ chi phí marketing trên doanh thu tháng (ACOS / CIR) vượt ngưỡng 30% liên tiếp 2 tháng.',
  },
];
