export interface QuarterlyRoadmap {
  quarter: string;
  months: string;
  volumeMin: number;
  volumeMax: number;
  volumeLabel: string;
  revenueMin: number;
  revenueMax: number;
  revenueLabel: string;
  focus: string;
}

export const quarterlyRoadmap: QuarterlyRoadmap[] = [
  {
    quarter: 'Giai đoạn 1',
    months: 'Tháng 1–3',
    volumeMin: 400,
    volumeMax: 500,
    volumeLabel: '400–500 chai/tháng',
    revenueMin: 120,
    revenueMax: 150,
    revenueLabel: '120–150 triệu VNĐ/tháng',
    focus: 'Khai phá nhận biết (Awareness), tung BST 4 mùa, kích hoạt sampling tại đại học & chuỗi bán lẻ.',
  },
  {
    quarter: 'Giai đoạn 2',
    months: 'Tháng 4–6',
    volumeMin: 500,
    volumeMax: 600,
    volumeLabel: '500–600 chai/tháng',
    revenueMin: 150,
    revenueMax: 180,
    revenueLabel: '150–180 triệu VNĐ/tháng',
    focus: 'Trải nghiệm đa kênh (Experience), đẩy mạnh Pop-up Booth hè với Sen Hậu Giang, kích hoạt Scent Quiz online.',
  },
  {
    quarter: 'Giai đoạn 3',
    months: 'Tháng 7–9',
    volumeMin: 600,
    volumeMax: 700,
    volumeLabel: '600–700 chai/tháng',
    revenueMin: 180,
    revenueMax: 210,
    revenueLabel: '180–210 triệu VNĐ/tháng',
    focus: 'Thúc đẩy mua kèm combo (Bundle Chăm da & Ươm hương), lan tỏa mùi Bưởi Việt thanh lịch mùa tựu trường.',
  },
  {
    quarter: 'Giai đoạn 4',
    months: 'Tháng 10–12',
    volumeMin: 700,
    volumeMax: 800,
    volumeLabel: '700–800 chai/tháng',
    revenueMin: 210,
    revenueMax: 240,
    revenueLabel: '210–240 triệu VNĐ/tháng',
    focus: 'Bùng nổ mùa lễ hội cuối năm với Cà phê Đắk Lắk, chiến dịch quà tặng BST Vườn Hương, tối ưu hóa mua lại.',
  },
];

export const yearlyTargets = {
  revenueTarget: '2 – 2,1 tỷ VNĐ',
  revenueNote: 'Mục tiêu doanh thu 12 tháng đầu tiên (tài liệu ghi nhận mục tiêu khoảng 2 tỷ và chi tiết kế hoạch 2,1 tỷ VNĐ).',
  volumeTarget: 'Khoảng 7.000 chai',
  volumeNote: 'Sản lượng cộng dồn 12 tháng phân bổ đều qua 4 quý phát triển.',
  netMarginTarget: 'Khoảng 20%',
  netMarginNote: 'Biên lợi nhuận ròng dự kiến sau khi tối ưu hóa chi phí sản xuất và phân phối.',
  netProfitTarget: 'Khoảng 420 triệu VNĐ',
  netProfitNote: 'Tương ứng với mức doanh thu mục tiêu 2,1 tỷ VNĐ và biên lợi nhuận ròng 20%.',
  marketShareTarget: 'Khoảng 10% thị phần Body Mist',
  marketShareStatus: 'Mục tiêu tham vọng của đề xuất, cần xác định quy mô phân khúc và baseline trước khi phê duyệt.',
  disclaimer: 'Tất cả các chỉ số trên là mục tiêu dự kiến của đề xuất kế hoạch marketing, không phải kết quả kinh doanh đã đạt được.',
};
