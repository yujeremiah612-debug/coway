import { Product } from '../types';

import enWater01 from '../assets/coway/en_water_01.jpg';
import enWater02 from '../assets/coway/en_water_02.jpg';
import enWater03 from '../assets/coway/en_water_03.jpg';
import enWater04 from '../assets/coway/en_water_04.jpg';
import enWater05 from '../assets/coway/en_water_05.jpg';
import enWater06 from '../assets/coway/en_water_06.jpg';
import enWater07 from '../assets/coway/en_water_07.jpg';
import enWater08 from '../assets/coway/en_water_08.jpg';
import enWater09 from '../assets/coway/en_water_09.jpg';
import enWater10 from '../assets/coway/en_water_10.jpg';
import enAir01 from '../assets/coway/en_air_01.jpg';
import enAir02 from '../assets/coway/en_air_02.jpg';
import enAir03 from '../assets/coway/en_air_03.jpg';
import enAir04 from '../assets/coway/en_air_04.jpg';
import enAir05 from '../assets/coway/en_air_05.jpg';
import enBidet01 from '../assets/coway/en_bidet_01.jpg';
import enBidet02 from '../assets/coway/en_bidet_02.jpg';
import enMassage01 from '../assets/coway/en_massage_01.png';
import heroEnWater from '../assets/coway/hero_en_water.jpg';

import krWater01 from '../assets/coway/kr_water_01.jpg';
import krWater02 from '../assets/coway/kr_water_02.jpg';
import krWater03 from '../assets/coway/kr_water_03.jpg';
import krWater04 from '../assets/coway/kr_water_04.jpg';
import krWater05 from '../assets/coway/kr_water_05.jpg';
import krWater06 from '../assets/coway/kr_water_06.jpg';
import krWater07 from '../assets/coway/kr_water_07.jpg';
import krWater08 from '../assets/coway/kr_water_08.jpg';
import krWater09 from '../assets/coway/kr_water_09.jpg';
import krWater10 from '../assets/coway/kr_water_10.jpg';
import krAir01 from '../assets/coway/kr_air_01.jpg';
import krAir02 from '../assets/coway/kr_air_02.jpg';
import krAir03 from '../assets/coway/kr_air_03.jpg';
import krAir04 from '../assets/coway/kr_air_04.jpg';
import krAir05 from '../assets/coway/kr_air_05.jpg';
import krBidet01 from '../assets/coway/kr_bidet_01.jpg';
import krBidet02 from '../assets/coway/kr_bidet_02.jpg';
import krMassage01 from '../assets/coway/kr_massage_01.png';
import heroKrWater from '../assets/coway/hero_kr_water.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'p-09cl',
    model: 'P 09CL',
    nameEn: 'Under Sink Water Purifier P 09CL',
    nameKr: '언더싱크 정수기 P 09CL',
    category: 'water',
    categoryLabelEn: 'Water Purifiers',
    categoryLabelKr: '정수기',
    subTypeEn: 'Under Sink (Non-Electric)',
    subTypeKr: '언더싱크형 (무전원)',
    waterTypes: ['ambient'],
    featuresEn: [
      'Space-saving under sink option',
      'Non-electric product with zero electric consumption',
      'Multi-stage Coway Neo-Sense RO Membrane filtration',
      'High-capacity dedicated 4.4 gallon storage tank'
    ],
    featuresKr: [
      '싱크대 하부 매립으로 조리대 공간 극대화',
      '전기 연결 없는 경제적이고 안전한 무전원 정수기',
      '코웨이 정품 네오센스 RO 멤브레인 정수 시스템',
      '4.4 갤런 대용량 위생 저수 탱크'
    ],
    dimensions: '13.8 × 16.4 × 8.7 inch',
    capacity: 'Total 4.4 gal',
    imageEn: enWater01,
    imageKr: krWater01,
    originalAlt: 'coway-Price-EN-080125-18.jpg',
    pricing: [
      { period: '6 yrs', periodKr: '6년 약정', rentalFee: 30.99 },
      { period: '5 yrs', periodKr: '5년 약정', rentalFee: 34.99, purchasePrice: 1199 },
      { period: '3 yrs', periodKr: '3년 약정', rentalFee: 38.99 }
    ],
    purchasePrice: 1199,
    descriptionEn: 'The Coway P 09CL fits neatly beneath your kitchen counter, saving valuable countertop space while dispensing fresh, pure ambient water straight through a stylish dedicated faucet.',
    descriptionKr: '주방 싱크대 하부에 깔끔하게 설치되어 조리 공간을 넓게 활용할 수 있는 무전원 언더싱크 정수기입니다. 미국 수질협회 WQA 인증 RO 필터로 깨끗한 정수를 공급합니다.',
    specificationDetails: {
      'Installation': 'Under Counter / Under Sink',
      'Water Output': 'Ambient Room Temperature',
      'Power': 'Non-electric',
      'Dimensions': '13.8 x 16.4 x 8.7 inches',
      'Tank Capacity': '4.4 Gallons',
      'Filtration': 'Coway Neo-Sense RO Membrane Filter'
    }
  },
  {
    id: 'p-300l',
    model: 'P-300L',
    nameEn: 'Countertop Water Purifier P-300L',
    nameKr: '카운터탑 정수기 P-300L',
    category: 'water',
    categoryLabelEn: 'Water Purifiers',
    categoryLabelKr: '정수기',
    subTypeEn: 'Countertop (Non-Electric)',
    subTypeKr: '카운터탑형 (무전원)',
    waterTypes: ['ambient'],
    featuresEn: [
      'High capacity countertop purifier',
      'Non-electric operation for worry-free reliability',
      'Contemporary curved chassis with teal accent lever',
      'Continuous extraction mode for filling pots and bottles'
    ],
    featuresKr: [
      '풍부한 추출량의 넉넉한 카운터탑 정수기',
      '전기료 걱정 없는 친환경 무전원 방식',
      '모던한 화이트 & 청록 액센트 디자인',
      '간편한 레버식 연속 추출 기능'
    ],
    dimensions: '12 × 16 × 16 inch',
    capacity: 'Total 1.72 gal',
    imageEn: enWater02,
    imageKr: krWater02,
    originalAlt: 'coway-Price-EN-080125-12.jpg',
    pricing: [
      { period: '6 yrs', periodKr: '6년 약정', rentalFee: 26.99 },
      { period: '5 yrs', periodKr: '5년 약정', rentalFee: 31.99, purchasePrice: 1099 },
      { period: '3 yrs', periodKr: '3년 약정', rentalFee: 35.99 }
    ],
    purchasePrice: 1099,
    descriptionEn: 'The Coway P-300L is an all-time customer favorite: compact, elegant, non-electric, and offering a robust 1.72 gallon capacity for household drinking and cooking needs.',
    descriptionKr: '전기 연결 없이 고성능 RO 필터로 안심하고 마실 수 있는 스테디셀러 카운터탑 정수기입니다. 1.72 갤런 용량으로 가족 모두를 위한 음용수와 요리수를 충분히 제공합니다.',
    specificationDetails: {
      'Installation': 'Countertop',
      'Water Output': 'Ambient Room Temperature',
      'Power': 'Non-electric',
      'Dimensions': '12 x 16 x 16 inches',
      'Tank Capacity': '1.72 Gallons',
      'Filtration': 'Coway Multi-Stage RO Membrane'
    }
  },
  {
    id: 'p-6320l',
    model: 'P-6320L',
    nameEn: 'Slim Water Purifier P-6320L',
    nameKr: '슬림 직수형 정수기 P-6320L',
    category: 'water',
    categoryLabelEn: 'Water Purifiers',
    categoryLabelKr: '정수기',
    subTypeEn: 'Ultra Slim Countertop',
    subTypeKr: '초슬림 카운터탑',
    waterTypes: ['ambient'],
    isNew: true,
    featuresEn: [
      'Sleek and modern slimline design (only 7.9" wide)',
      'One-touch automatic electronic dispensing',
      'Soft champagne gold metallic front finish',
      'Fits neatly even in the most compact kitchen corners'
    ],
    featuresKr: [
      '폭 7.9인치로 좁은 주방에도 쏙 들어가는 초슬림 디자인',
      '원터치 전자식 정량 추출 버튼',
      '고급스러운 샴페인 골드 & 베이지 컬러',
      '스마트 위생 파우셋 코크'
    ],
    dimensions: '7.9 × 16 × 16 inch',
    capacity: 'Total 1.3 gal',
    imageEn: enWater03,
    imageKr: krWater03,
    originalAlt: 'coway-Price-EN-080125-02.jpg',
    pricing: [
      { period: '6 yrs', periodKr: '6년 약정', rentalFee: 30.99 },
      { period: '5 yrs', periodKr: '5년 약정', rentalFee: 34.99, purchasePrice: 1199 },
      { period: '3 yrs', periodKr: '3년 약정', rentalFee: 38.99 }
    ],
    purchasePrice: 1199,
    descriptionEn: 'Engineered for modern urban living, the P-6320L combines an ultra-slim 7.9-inch profile with one-touch electronic controls and Coway certified deep water filtration.',
    descriptionKr: '폭 7.9인치의 컴팩트한 바디에 세련된 원터치 추출 방식을 적용한 모던 슬림 정수기입니다. 좁은 주방 공간에서도 고급스러운 인테리어 효과를 연출합니다.',
    specificationDetails: {
      'Installation': 'Countertop Slim',
      'Width': '7.9 inches',
      'Dimensions': '7.9 x 16 x 16 inches',
      'Tank Capacity': '1.3 Gallons',
      'Controls': 'One-Touch Electronic Button'
    }
  },
  {
    id: 'chp-6320l',
    model: 'CHP-6320L / CP-6330L',
    nameEn: 'Countertop Hot & Cold Purifier CHP-6320L',
    nameKr: '카운터탑 냉온정수기 CHP-6320L / CP-6330L',
    category: 'water',
    categoryLabelEn: 'Water Purifiers',
    categoryLabelKr: '정수기',
    subTypeEn: 'Hot, Cold & Ambient Countertop',
    subTypeKr: '냉수·온수·정수 카운터탑',
    waterTypes: ['ambient', 'cold', 'hot'],
    featuresEn: [
      '"My Cup" customizable volume dispensing (120ml / 250ml / 500ml / continuous)',
      'Automatic energy-saving eco modes and sensors',
      'Hot water safety lock protecting children and family',
      'Available in full Hot/Cold/Ambient (CHP-6330L) or Cold/Ambient (CP-6330L)'
    ],
    featuresKr: [
      '원하는 용량을 간편하게 추출하는 "마이컵" 맞춤 정량 추출',
      '빛 감지 센서 기반의 스마트 절전 에코 모드',
      '안전한 온수 잠금 기능 내장',
      '냉온정수기(CHP-6330L) 또는 냉정수기(CP-6330L) 선택 가능'
    ],
    dimensions: '12.6 × 16 × 21.3 inch',
    capacity: 'Total 1.31 gal (Ambient 0.71 / Cold 0.6)',
    imageEn: enWater04,
    imageKr: krWater04,
    originalAlt: 'coway-Price-EN-working-083026-6330L.jpg',
    pricing: [
      { period: '6 yrs', periodKr: '6년 약정', rentalFee: 45.99 },
      { period: '5 yrs', periodKr: '5년 약정', rentalFee: 52.99, purchasePrice: 1799 },
      { period: '3 yrs', periodKr: '3년 약정', rentalFee: 55.99 }
    ],
    purchasePrice: 1799,
    descriptionEn: 'The flagship CHP-6320L/CP-6330L delivers hot tea water, ice-cold refreshment, and purified ambient water instantly with pre-programmed dispensing sizes and energy conservation.',
    descriptionKr: '언제든 버튼 한 번으로 시원한 냉수, 따뜻한 온수, 신선한 정수를 바로 마실 수 있는 프리미엄 카운터탑 냉온정수기입니다. 마이컵 정량 추출과 자동 절전 모드가 탑재되어 있습니다.',
    specificationDetails: {
      'Water Output': 'Ambient, Cold, Hot (CHP) or Ambient, Cold (CP)',
      'Dimensions': '12.6 x 16 x 21.3 inches',
      'Tank Capacity': 'Total 1.31 gal (Ambient 0.71 / Cold 0.6 gal)',
      'Eco Modes': 'Light-sensing Automatic Sleep',
      'Child Lock': 'Dedicated Hot Water Safety Lock'
    }
  },
  {
    id: 'chpi-7520l',
    model: 'CHPI-7520L',
    nameEn: 'Countertop Ice Water Purifier CHPI-7520L',
    nameKr: '카운터탑 얼음 냉온정수기 CHPI-7520L',
    category: 'water',
    categoryLabelEn: 'Water Purifiers',
    categoryLabelKr: '정수기',
    subTypeEn: 'Countertop Ice Maker + Hot/Cold',
    subTypeKr: '카운터탑 제빙 일체형 냉온정수기',
    waterTypes: ['ambient', 'cold', 'hot', 'ice'],
    isNew: true,
    featuresEn: [
      'Dual ice and water cooling mechanism for rapid dispensing',
      'UV Care sterilization applied directly to the ice storage tank',
      'Produces crystal clear, dense ice bullets daily',
      'All-in-one Hot, Cold, Ambient water and Fresh Ice on your counter'
    ],
    featuresKr: [
      '얼음과 냉수를 빠르게 생성하는 듀얼 냉각 시스템',
      '얼음 탱크 내부를 살균하는 안심 UV 케어',
      '단단하고 깨끗한 투명 핑거 얼음 상시 보관',
      '냉수·온수·정수·얼음을 한 대에 담은 콤팩트 프리미엄'
    ],
    dimensions: '10.6 × 21.5 × 20.3 inch',
    capacity: 'Total 1.36 gal (Amb 0.48 / Cold 0.48 / Hot 0.4) + Ice 1.54 lbs',
    imageEn: enWater05,
    imageKr: krWater05,
    originalAlt: 'coway-Price-EN-080125-15.jpg',
    pricing: [
      { period: '6 yrs', periodKr: '6년 약정', rentalFee: 62.99 },
      { period: '5 yrs', periodKr: '5년 약정', rentalFee: 72.99, purchasePrice: 2749 },
      { period: '3 yrs', periodKr: '3년 약정', rentalFee: 77.99 }
    ],
    purchasePrice: 2749,
    descriptionEn: 'Say goodbye to buying bags of ice and bottled water. The CHPI-7520L brings Coway renowned ice-making technology to your countertop with UV sterilization and instant temperature selection.',
    descriptionKr: '무거운 생수와 얼음 팩 구매는 이제 그만! 조리대에 꼭 맞는 콤팩트한 크기에 신선한 얼음과 냉수, 온수, 정수를 모두 제공하며, 얼음 탱크 UV 살균으로 언제나 안심입니다.',
    specificationDetails: {
      'Type': 'Countertop Ice & Water Dispenser',
      'Water Options': 'Ice, Hot, Cold, Ambient',
      'Ice Capacity': '1.54 lbs ice storage',
      'Tank Capacity': '1.36 gal total',
      'UV Sanitization': 'Ice Storage Tank UV Care'
    }
  },
  {
    id: 'chpi-5820l',
    model: 'CHPI-5820L (Ice Stand 3.0)',
    nameEn: 'Ice Stand 3.0 Floor Purifier CHPI-5820L',
    nameKr: '스탠드 대용량 얼음정수기 3.0 CHPI-5820L',
    category: 'water',
    categoryLabelEn: 'Water Purifiers',
    categoryLabelKr: '정수기',
    subTypeEn: 'Commercial / High-Volume Ice Stand',
    subTypeKr: '대용량 스탠드형 얼음 냉온정수기',
    waterTypes: ['ambient', 'cold', 'hot', 'ice'],
    isNew: true,
    featuresEn: [
      'Ergonomic tall design with large 6.6 lbs ice storage capacity',
      'Designed for busy households, commercial offices, and clinics',
      '3.96 gallon high-capacity water tank reserves',
      'Continuous extraction levers and independent ice dispenser push-tab'
    ],
    featuresKr: [
      '6.6 파운드의 풍부한 얼음 저장량과 인체공학적 높이 설계',
      '다인 가구, 회사 오피스, 병원, 교회, 식당 최적화',
      '3.96 갤런의 넉넉한 대용량 저수 탱크 (냉1.59 / 정1.45 / 온0.92)',
      '분리형 추출 레버와 원터치 얼음 추출구'
    ],
    dimensions: '13 × 22.4 × 53.2 inch',
    capacity: 'Total 3.96 gal + Ice 6.6 lbs',
    imageEn: enWater06,
    imageKr: krWater06,
    originalAlt: 'coway-Price-EN-working-083026ai-02.jpg',
    pricing: [
      { period: '6 yrs', periodKr: '6년 약정', rentalFee: 66.99 },
      { period: '5 yrs', periodKr: '5년 약정', rentalFee: 73.99, purchasePrice: 2749 },
      { period: '3 yrs', periodKr: '3년 약정', rentalFee: 80.99 }
    ],
    purchasePrice: 2749,
    descriptionEn: 'The ultimate powerhouse water station. Coway Ice Stand 3.0 stores 6.6 pounds of ice and nearly 4 gallons of water, keeping large family gatherings and office staff refreshed all day.',
    descriptionKr: '풍부한 얼음과 대용량 냉온수가 필요한 대가족 및 오피스를 위한 최고 사양 스탠드형 얼음정수기입니다. 허리를 굽히지 않고 편하게 얼음과 물을 추출할 수 있습니다.',
    specificationDetails: {
      'Application': 'Heavy Residential & Commercial',
      'Ice Capacity': '6.6 lbs Ice Storage',
      'Water Tank': '3.96 Gallons Total (Cold 1.59, Ambient 1.45, Hot 0.92)',
      'Dimensions': '13 x 22.4 x 53.2 inches',
      'Filtration': 'Coway High-Flow RO Membrane'
    }
  },
  {
    id: 'chpi-620l',
    model: 'CHPI-620L',
    nameEn: 'Standing Ice Water Purifier CHPI-620L',
    nameKr: '스탠드형 얼음 냉온정수기 CHPI-620L',
    category: 'water',
    categoryLabelEn: 'Water Purifiers',
    categoryLabelKr: '정수기',
    subTypeEn: 'Standing Ice & Water Dispenser',
    subTypeKr: '스탠드형 제빙 냉온정수기',
    waterTypes: ['ambient', 'cold', 'hot', 'ice'],
    isNew: true,
    featuresEn: [
      'Generous 2.21 lbs ice storage capacity',
      'Wide dispensing tray accommodates pitchers, water bottles, and sports tumblers',
      'Promotional specials: $0 Registration fee options available',
      'Independent ice dispenser and dedicated water push levers'
    ],
    featuresKr: [
      '2.21 파운드 넉넉한 얼음 저장 탱크',
      '물병, 대형 텀블러, 냄비도 편안하게 받치는 와이드 트레이',
      '특별 프로모션: 등록비 면제($0) 옵션 적용',
      '손쉬운 푸시 레버 및 위생적인 분리형 코크'
    ],
    dimensions: '12.0 × 20.0 × 51.0 inch',
    capacity: 'Total 2.0 gal (Ambient 0.9 / Cold 0.7 / Hot 0.4) + Ice 2.21 lbs',
    imageEn: heroEnWater,
    imageKr: heroKrWater,
    originalAlt: 'coway-Price-EN-080125-Hero.jpg',
    pricing: [
      { period: '6 yrs', periodKr: '6년 약정', rentalFee: 55.99, promoFee: 58.99 },
      { period: '5 yrs', periodKr: '5년 약정', rentalFee: 64.99, promoFee: 67.99, purchasePrice: 1999 },
      { period: '3 yrs', periodKr: '3년 약정', rentalFee: 69.99, promoFee: 72.99 }
    ],
    purchasePrice: 1999,
    descriptionEn: 'Highlighted on the Coway Dallas homepage, the CHPI-620L combines floor-standing convenience with clean ice making and cold/hot/ambient water on demand.',
    descriptionKr: '코웨이 달라스 메인 추천 상품! 얼음 생성과 냉온정수 기능을 슬림한 스탠드 바디에 집약하여 주방과 사무실 어디에나 조화롭게 어울립니다.',
    specificationDetails: {
      'Type': 'Standing Ice & Water Purifier',
      'Ice Storage': '2.21 lbs',
      'Water Tank': '2.0 Gallons Total',
      'Dimensions': '12.0 x 20.0 x 51.0 inches',
      'Monthly Promotion': 'Reg Fee $100 ($55.99/mo) or Reg Fee $0 ($58.99/mo)'
    }
  },
  {
    id: 'chp-5710l',
    model: 'CHP-5710L',
    nameEn: 'Standing Water Purifier CHP-5710L',
    nameKr: '스탠드형 냉온정수기 CHP-5710L',
    category: 'water',
    categoryLabelEn: 'Water Purifiers',
    categoryLabelKr: '정수기',
    subTypeEn: 'Slim Floor Standing',
    subTypeKr: '슬림 스탠드형 냉온정수기',
    waterTypes: ['ambient', 'cold', 'hot'],
    featuresEn: [
      'Ultra-slim 10.3" footprint engineered for tight spaces',
      'Essential hot, cold, and ambient functions for daily home and office use',
      'Twin push paddles for simple one-hand cup filling',
      'Generous 3.2 gallon total water storage'
    ],
    featuresKr: [
      '폭 10.3인치 초슬림 바디로 좁은 틈새 공간에도 쏙 설치',
      '일상에서 가장 많이 사용하는 온수·냉수·정수 기본 완벽 지원',
      '한 손으로 컵을 밀어 추출하는 편리한 트윈 레버',
      '3.2 갤런 대용량 탱크로 끊김 없는 정수 공급'
    ],
    dimensions: '10.3 × 17.7 × 45.3 inch',
    capacity: 'Total 3.2 gal (Ambient 1.6 / Cold 0.8 / Hot 0.8)',
    imageEn: enWater07,
    imageKr: krWater07,
    originalAlt: 'coway-Price-EN-080125-03.jpg',
    pricing: [
      { period: '6 yrs', periodKr: '6년 약정', rentalFee: 53.99 },
      { period: '5 yrs', periodKr: '5년 약정', rentalFee: 60.99, purchasePrice: 2049 },
      { period: '3 yrs', periodKr: '3년 약정', rentalFee: 62.99 }
    ],
    purchasePrice: 2049,
    descriptionEn: 'The CHP-5710L standing water dispenser combines high capacity with a slim profile that fits anywhere in your kitchen, restaurant, or business lobby.',
    descriptionKr: '넉넉한 용량과 슬림한 가로 폭을 겸비하여 식당, 상가, 오피스, 일반 가정에서 두루 사랑받는 코웨이 정통 스탠드 냉온정수기입니다.',
    specificationDetails: {
      'Installation': 'Free-Standing Floor Model',
      'Dimensions': '10.3 x 17.7 x 45.3 inches',
      'Tank Capacity': '3.2 gal (Ambient 1.6, Cold 0.8, Hot 0.8)',
      'Child Lock': 'Mechanical Safety Hot Water Stop'
    }
  },
  {
    id: 'chp-5722l',
    model: 'CHP-5722L',
    nameEn: 'Standing Water Purifier CHP-5722L',
    nameKr: '프리미엄 스탠드 냉온정수기 CHP-5722L',
    category: 'water',
    categoryLabelEn: 'Water Purifiers',
    categoryLabelKr: '정수기',
    subTypeEn: 'Premium Touch Floor Standing',
    subTypeKr: '고급 터치 스탠드 냉온정수기',
    waterTypes: ['ambient', 'cold', 'hot'],
    featuresEn: [
      'High capacity in an elegant, contemporary standing aesthetic',
      'Easy-touch digital dispensing for effortless everyday operation',
      'Reinforced sanitary dispensing nozzles with removable drip tray',
      'Energy-smart compressor system reduces operating power'
    ],
    featuresKr: [
      '세련된 실루엣과 고급 마감재를 적용한 프리미엄 스탠드',
      '이지 터치 패널과 편리한 추출 버튼',
      '위생적인 분리 세척 코크 및 대용량 물받이 트레이',
      '고효율 인버터 컴프레서로 전력 절감'
    ],
    dimensions: '10.3 × 17.7 × 45.3 inch',
    capacity: 'Total 3.2 gal (Ambient 1.6 / Cold 0.8 / Hot 0.8)',
    imageEn: enWater08,
    imageKr: krWater08,
    originalAlt: 'coway-Price-EN-080125-01.jpg',
    pricing: [
      { period: '6 yrs', periodKr: '6년 약정', rentalFee: 57.99 },
      { period: '5 yrs', periodKr: '5년 약정', rentalFee: 65.99, purchasePrice: 2299 },
      { period: '3 yrs', periodKr: '3년 약정', rentalFee: 68.99 }
    ],
    purchasePrice: 2299,
    descriptionEn: 'An upgraded premium edition of the 5700 series, the CHP-5722L adds touch digital dispensing controls and a refined architectural body.',
    descriptionKr: '정교한 터치 컨트롤과 품격 있는 화이트 바디로 인테리어를 한층 높여주는 코웨이 프리미엄 스탠드형 냉온정수기입니다.',
    specificationDetails: {
      'Installation': 'Floor-Standing Premium',
      'Controls': 'Touch Sensor & Lever System',
      'Dimensions': '10.3 x 17.7 x 45.3 inches',
      'Tank Capacity': '3.2 gal Total'
    }
  },
  {
    id: 'ap-1523d',
    model: 'AP-1523D',
    nameEn: 'Multi-Action Air Purifier AP-1523D',
    nameKr: '멀티액션 공기청정기 AP-1523D',
    category: 'air',
    categoryLabelEn: 'Air Purifiers',
    categoryLabelKr: '공기청정기',
    roomCoverage: '953 sq ft (2 air changes/hr)',
    isNew: true,
    featuresEn: [
      'Enhanced with medical-grade H13 True HEPA filter capturing 99.999% of fine particles',
      'Air reached further via the iconic Coway central circulation air hall',
      'Multi-action airflow modes: Front, Top, and Turbo dual circulation',
      'Self-Service Filter Delivery Program available at discounted rates'
    ],
    featuresKr: [
      '0.01㎛ 극초미세먼지까지 99.999% 제거하는 H13 트루 헤파 필터',
      '에어 서큘레이터 홀을 통해 멀리까지 깨끗한 공기를 보내는 멀티액션',
      '전면순환, 상부순환, 듀얼순환 등 상황별 맞춤 케어',
      '자가 관리(셀프 서비스) 프로그램 선택 가능'
    ],
    dimensions: '16 × 30 × 9 inch',
    imageEn: enWater09,
    imageKr: krAir01,
    originalAlt: 'coway-Price-EN-080125-16.jpg',
    pricing: [
      { period: '6 yrs', periodKr: '6년 약정', rentalFee: 37.99, selfServiceFee: { standard: 33.99, extended: 35.99 } },
      { period: '5 yrs', periodKr: '5년 약정', rentalFee: 43.99, purchasePrice: 1299 },
      { period: '3 yrs', periodKr: '3년 약정', rentalFee: 48.99, selfServiceFee: { standard: 44.99, extended: 46.99 } }
    ],
    purchasePrice: 1299,
    descriptionEn: 'The next-generation Coway Multi-Action AP-1523D features the signature circular airflow portal to deliver clean air directly across large living rooms, master bedrooms, and daycare rooms.',
    descriptionKr: '가운데 홀을 통해 깨끗한 공기를 더 멀리 강력하게 전달하는 코웨이 신제품 멀티액션 공기청정기입니다. 953 sq ft 면적을 빈틈없이 정화합니다.',
    specificationDetails: {
      'Coverage Area': '953 sq ft (2 air changes/hour)',
      'Filters': 'Pre-Filter, Custom Filter, Deodorization Filter, H13 HEPA Filter',
      'Dimensions': '16 x 30 x 9 inches',
      'Airflow Control': 'Multi-directional Circular Center Hall'
    }
  },
  {
    id: 'ap-3018b',
    model: 'AP-3018B',
    nameEn: 'Super Capacity Air Purifier AP-3018B',
    nameKr: '초대용량 공기청정기 AP-3018B (쿼드모터)',
    category: 'air',
    categoryLabelEn: 'Air Purifiers',
    categoryLabelKr: '공기청정기',
    roomCoverage: '1,076 sq ft (large open spaces)',
    featuresEn: [
      'Dual heavy-duty motors and 360° four-sided air suction',
      '14 filters engineered for maximum purifying power',
      'Ideal for large open homes, medical offices, restaurants, and schools',
      'Self-Service maintenance program available'
    ],
    featuresKr: [
      '듀얼 모터와 4면 입체 흡입으로 초강력 공기 청정',
      '최대 14개의 필터 시스템으로 각종 유해물질 완벽 차단',
      '대형 주택 거실, 학원, 병원, 교회, 식당 등 다중이용시설 추천',
      '자가 관리(셀프 서비스) 렌탈 플랜 선택 가능'
    ],
    dimensions: '19.6 × 12.8 × 31.4 inch',
    imageEn: enWater10,
    imageKr: krAir02,
    originalAlt: 'coway-Price-EN-080125-06.jpg',
    pricing: [
      { period: '6 yrs', periodKr: '6년 약정', rentalFee: 55.99, selfServiceFee: { standard: 51.99, extended: 53.99 } },
      { period: '5 yrs', periodKr: '5년 약정', rentalFee: 63.99, purchasePrice: 1899 },
      { period: '3 yrs', periodKr: '3년 약정', rentalFee: 66.99, selfServiceFee: { standard: 62.99, extended: 64.99 } }
    ],
    purchasePrice: 1899,
    descriptionEn: 'Engineered for high-demand spaces, the AP-3018B utilizes dual blower motors and 14 precision filters across all four faces to purify over 1,000 square feet rapidly.',
    descriptionKr: '2개의 강력한 모터와 4방향 입체 흡입구를 장착하여 넓은 면적의 공기를 순식간에 정화하는 코웨이의 최상위 초대용량 공기청정기입니다.',
    specificationDetails: {
      'Coverage': '1,076 sq ft',
      'Motors': 'Dual Inverter Motors',
      'Filter Count': '14 Filters Total',
      'Dimensions': '19.6 x 12.8 x 31.4 inches'
    }
  },
  {
    id: 'ap-2021a',
    model: 'AP-2021A (Noble)',
    nameEn: 'Noble Architectural Air Purifier AP-2021A',
    nameKr: '노블 공기청정기 타워형 AP-2021A',
    category: 'air',
    categoryLabelEn: 'Air Purifiers',
    categoryLabelKr: '공기청정기',
    roomCoverage: '1,103 sq ft (2 air changes/hr)',
    featuresEn: [
      '4D Filter System with 360° all-around continuous purification',
      'Motorized Air Pop-Up Panel tilts dynamically for directed airflow circulation',
      'Iconic architectural tower aesthetic winner of international design awards',
      'Ultra-silent night sleep mode with invisible display'
    ],
    featuresKr: [
      '360도 전 방향을 빈틈없이 케어하는 4D 입체 필터 시스템',
      '공기 질에 따라 자동으로 각도가 조절되는 모터 구동 에어 팝업 패널',
      '세계 4대 디자인 어워드를 석권한 건축학적 타워 디자인',
      '초저소음 수면 모드 및 히든 디스플레이'
    ],
    dimensions: '12.6 × 31.7 × 12.6 inch',
    imageEn: enAir01,
    imageKr: krAir03,
    originalAlt: 'coway-Price-EN-080125-08.jpg',
    pricing: [
      { period: '6 yrs', periodKr: '6년 약정', rentalFee: 43.99, selfServiceFee: { standard: 39.99, extended: 41.99 } },
      { period: '5 yrs', periodKr: '5년 약정', rentalFee: 48.99, purchasePrice: 1499 },
      { period: '3 yrs', periodKr: '3년 약정', rentalFee: 53.99, selfServiceFee: { standard: 49.99, extended: 51.99 } }
    ],
    purchasePrice: 1499,
    descriptionEn: 'Coway renowned Noble Tower marries sculptural modern architecture with state-of-the-art 4D air purification, filtering 1,103 sq ft with quiet elegance.',
    descriptionKr: '건축물에서 영감을 받은 모던한 기둥 디자인과 4D 입체 필터 기술이 결합된 코웨이 최고급 노블 공기청정기입니다.',
    specificationDetails: {
      'Coverage': '1,103 sq ft',
      'Design': 'Noble Tower Fluted Column',
      'Air Panel': 'Motorized Dynamic Pop-Up Air Hood',
      'Dimensions': '12.6 x 31.7 x 12.6 inches'
    }
  },
  {
    id: 'ap-2023k',
    model: 'AP-2023K (Noble Duo)',
    nameEn: 'Noble Air Purifier 2023 AP-2023K',
    nameKr: '노블 공기청정기 2023 AP-2023K',
    category: 'air',
    categoryLabelEn: 'Air Purifiers',
    categoryLabelKr: '공기청정기',
    roomCoverage: '2,205 sq ft (1 air change/hr)',
    isNew: true,
    featuresEn: [
      'High-velocity 4D filtration rated for up to 2,205 sq ft',
      'Available in sophisticated Pebble Gray and Porcelain White',
      'Smart sensor automatically adjusts pop-up hood angle based on air pollution source',
      'Self-Service program with scheduled cartridge deliveries'
    ],
    featuresKr: [
      '최대 2,205 sq ft까지 커버하는 고출력 4D 입체 정화 시스템',
      '페블 그레이 및 포슬린 화이트 2가지 프리미엄 컬러',
      '오염 발생 방향을 스스로 감지하여 바람 각도를 바꾸는 스마트 팝업',
      '정기 필터 배송형 셀프 서비스 렌탈 지원'
    ],
    dimensions: '12.6 × 12.6 × 31.7 inch',
    imageEn: enAir02,
    imageKr: krAir04,
    originalAlt: 'coway-Price-EN-working-083026-2023.jpg',
    pricing: [
      { period: '6 yrs', periodKr: '6년 약정', rentalFee: 43.99, selfServiceFee: { standard: 39.99, extended: 41.99 } },
      { period: '5 yrs', periodKr: '5년 약정', rentalFee: 48.99, purchasePrice: 1499 },
      { period: '3 yrs', periodKr: '3년 약정', rentalFee: 53.99, selfServiceFee: { standard: 49.99, extended: 51.99 } }
    ],
    purchasePrice: 1499,
    descriptionEn: 'The updated 2023 Noble AP-2023K covers up to 2,205 square feet with whisper-quiet airflow, advanced odor decomposition, and an elegant vertical linear facade.',
    descriptionKr: '넓은 평형대 거실과 오픈 플랜 주택을 위해 강력한 정화력과 고급스러운 가구 감성을 겸비한 2023 노블 공기청정기입니다.',
    specificationDetails: {
      'Coverage': '2,205 sq ft',
      'Color Options': 'Pebble Gray / Porcelain White',
      'Dimensions': '12.6 x 12.6 x 31.7 inches'
    }
  },
  {
    id: 'ap-1125g',
    model: 'AP-1125G (Square Fit)',
    nameEn: 'Square Fit Air Purifier AP-1125G',
    nameKr: '스퀘어핏 공기청정기 AP-1125G',
    category: 'air',
    categoryLabelEn: 'Air Purifiers',
    categoryLabelKr: '공기청정기',
    roomCoverage: '1,373 sq ft (1 air change/hr)',
    isNew: true,
    featuresEn: [
      'Slim profile with 4-stage high-efficiency filtration',
      'Minimalist fluted facade blending seamlessly into bedrooms and apartments',
      'Real-time ambient LED air quality light bar',
      'Compact width (only 7.2" deep) hugs walls without taking floor space'
    ],
    featuresKr: [
      '두께 7.2인치 슬림 디자인과 강력한 4단계 복합 필터 시스템',
      '벽면에 밀착 설치 가능한 미니멀 루버 그릴 전면 디자인',
      '실시간 공기 청정도를 한눈에 보여주는 상단 4단계 LED 링',
      '침실, 아이방, 서재, 원룸 최적화'
    ],
    dimensions: '14.4 × 7.2 × 19.7 inch',
    imageEn: enAir03,
    imageKr: krAir05,
    originalAlt: 'coway-Price-EN-working-083026ai-05.jpg',
    pricing: [
      { period: '6 yrs', periodKr: '6년 약정', rentalFee: 34.99, selfServiceFee: { standard: 30.99, extended: 32.99 } },
      { period: '5 yrs', periodKr: '5년 약정', rentalFee: 39.99, purchasePrice: 999 },
      { period: '3 yrs', periodKr: '3년 약정', rentalFee: 42.99, selfServiceFee: { standard: 38.99, extended: 40.99 } }
    ],
    purchasePrice: 999,
    descriptionEn: 'The new Square Fit AP-1125G brings clean modern lines and powerful 1,373 sq ft air purification in an ultra-slim 7.2-inch depth that blends into any modern home.',
    descriptionKr: '두께를 대폭 줄여 공간 활용성을 극대화한 신제품 스퀘어핏 공기청정기입니다. 1,373 sq ft의 넉넉한 공간을 맑고 상쾌하게 유지해 줍니다.',
    specificationDetails: {
      'Coverage': '1,373 sq ft',
      'Depth': '7.2 inches',
      'Dimensions': '14.4 x 7.2 x 19.7 inches'
    }
  },
  {
    id: 'ap-2425h',
    model: 'AP-2425H (Square Fit Large)',
    nameEn: 'Square Fit Large Air Purifier AP-2425H',
    nameKr: '스퀘어핏 대용량 공기청정기 AP-2425H',
    category: 'air',
    categoryLabelEn: 'Air Purifiers',
    categoryLabelKr: '공기청정기',
    roomCoverage: '2,805 sq ft (1 air change/hr)',
    isNew: true,
    featuresEn: [
      '4-stage heavy-duty filter for massive 2,805 sq ft large-area coverage',
      'Nordic raised-leg furniture styling with durable matte casing',
      'Rapid pollen, pet dander, dust, and kitchen smoke mitigation',
      'Available in Arctic White and Slate Charcoal'
    ],
    featuresKr: [
      '2,805 sq ft 초대형 면적을 빠르게 정화하는 4단계 헤비듀티 필터',
      '가구처럼 자연스러운 북유럽풍 받침 다리 스탠드 디자인',
      '반려동물 털, 꽃가루, 미세먼지, 음식 조리 냄새 완벽 탈취',
      '화이트 & 차콜 컬러 라인업'
    ],
    dimensions: '14 × 14.4 × 21.1 inch',
    imageEn: enAir04,
    imageKr: krWater08,
    originalAlt: 'coway-Price-EN-working-083026ai-06.jpg',
    pricing: [
      { period: '6 yrs', periodKr: '6년 약정', rentalFee: 42.99, selfServiceFee: { standard: 38.99, extended: 40.99 } },
      { period: '5 yrs', periodKr: '5년 약정', rentalFee: 47.99, purchasePrice: 1499 },
      { period: '3 yrs', periodKr: '3년 약정', rentalFee: 52.99, selfServiceFee: { standard: 48.99, extended: 50.99 } }
    ],
    purchasePrice: 1499,
    descriptionEn: 'The flagship large-format Square Fit AP-2425H purifies an astounding 2,805 square feet, styled with raised legs that look like a designer side cabinet.',
    descriptionKr: '감각적인 가구형 다리 스탠드와 2,805 sq ft를 아우르는 압도적 성능을 갖춘 대형 공간용 스퀘어핏 공기청정기입니다.',
    specificationDetails: {
      'Coverage': '2,805 sq ft',
      'Dimensions': '14 x 14.4 x 21.1 inches',
      'Self Service Plan': 'Standard $38.99 / Extended $40.99'
    }
  },
  {
    id: 'bas42-b',
    model: 'BAS42-B',
    nameEn: 'Instant Water Heating Bidet BAS42-B',
    nameKr: '순간온수 안심살균 비데 BAS42-B',
    category: 'bidet',
    categoryLabelEn: 'Bidets & Softeners',
    categoryLabelKr: '비데 & 연수기',
    featuresEn: [
      'Replaceable deodorizing carbon filter and automated UV nozzle sterilization',
      'Instant continuous water heating for infinite warm water washes',
      'Wireless ergonomic remote control with wall-mount magnetic dock',
      'Available in Round (R type) and Elongated (E type) toilet seat fits'
    ],
    featuresKr: [
      '교체형 탈취 필터와 사용 전후 노즐을 소독하는 안심 UV 살균',
      '기다림 없이 언제나 따뜻한 연속 온수를 제공하는 순간온수 모듈',
      '벽걸이 거치형 슬림 무선 리모컨 제공',
      '원형(Round) 및 연장형(Elongated) 변기 완벽 호환'
    ],
    dimensions: 'R type: 15.6 × 19.4 × 5.4 in | E type: 15.6 × 20.6 × 5.4 in',
    imageEn: enBidet01,
    imageKr: krBidet01,
    originalAlt: 'coway-Price-EN-working-083026ai.jpg',
    pricing: [
      { period: '6 yrs', periodKr: '6년 약정', rentalFee: 27.99 },
      { period: '5 yrs', periodKr: '5년 약정', rentalFee: 29.99, purchasePrice: 999 },
      { period: '3 yrs', periodKr: '3년 약정', rentalFee: 34.99 }
    ],
    purchasePrice: 999,
    descriptionEn: 'Coway best-selling BAS42-B bidet provides endless instant warm water, an active deodorizer that eliminates bathroom odors, and automatic UV nozzle hygiene.',
    descriptionKr: '순간 온수 가열 기술로 찬물 걱정 없이 따뜻하고 부드러운 세정을 제공하며, 교체형 탈취 필터와 UV 노즐 살균으로 화장실을 항상 쾌적하게 유지합니다.',
    specificationDetails: {
      'Heating': 'Instant Continuous Ceramic Heating',
      'Sanitization': 'Automatic UV Nozzle Sanitization',
      'Remote': 'Wireless Wall-Mounted Remote',
      'Sizes': 'Round (15.6 x 19.4 in) / Elongated (15.6 x 20.6 in)'
    }
  },
  {
    id: 'bb-14bus',
    model: 'BB-14BUS',
    nameEn: 'Ultra Slim Water Softener BB-14BUS',
    nameKr: '울트라 슬림 연수기 BB-14BUS',
    category: 'bidet',
    categoryLabelEn: 'Bidets & Softeners',
    categoryLabelKr: '비데 & 연수기',
    subTypeEn: 'Bathroom Water Softener',
    subTypeKr: '욕실용 프리미엄 연수기',
    featuresEn: [
      'Softens hard Texas mineral water to minimize skin dryness and eczema irritation',
      'Quick 15-minute simple automated regeneration cycle',
      'Leaves hair silky and skin moisturized after every shower',
      'Compact wall-mount bathroom profile with easy salt refill'
    ],
    featuresKr: [
      '텍사스의 센물(석회질/경수)을 부드러운 연수로 바꿔 피부 자극 최소화',
      '15분 만에 끝나는 초간편 재생 사이클',
      '샤워 후 피부 당김과 가려움을 줄여주는 실키 온천수 케어',
      '욕실 벽면에 깔끔하게 설치되는 슬림 화이트 디자인'
    ],
    dimensions: '11.2 × 7.5 × 19.7 inch',
    imageEn: enBidet02,
    imageKr: krBidet02,
    originalAlt: 'coway-Price-EN-080125-11.jpg',
    pricing: [
      { period: '6 yrs', periodKr: '6년 약정', rentalFee: 43.99 },
      { period: '5 yrs', periodKr: '5년 약정', rentalFee: 49.99, purchasePrice: 999 },
      { period: '3 yrs', periodKr: '3년 약정', rentalFee: 53.99 }
    ],
    purchasePrice: 999,
    descriptionEn: 'Protect your skin and hair against harsh Texas hard water. The BB-14BUS transforms shower water into silky, mineral-balanced soft water through ion exchange.',
    descriptionKr: '달라스/포트워스 지역의 석회수와 경수로 인한 아토피, 건조한 피부, 푸석한 모발을 촉촉하게 개선해 주는 코웨이 정품 욕실 연수기입니다.',
    specificationDetails: {
      'Technology': 'Ion Exchange Softening',
      'Regeneration': '15-Minute Easy Cycle',
      'Dimensions': '11.2 x 7.5 x 19.7 inches'
    }
  },
  {
    id: 'bas-22',
    model: 'BAS-22',
    nameEn: 'Self-Cleaning Bidet BAS-22',
    nameKr: '스스로 살균 비데 BAS-22',
    category: 'bidet',
    categoryLabelEn: 'Bidets & Softeners',
    categoryLabelKr: '비데 & 연수기',
    featuresEn: [
      'Electrolyzed sterilizing water self-cleans the water line, nozzle, and toilet bowl',
      'Energy efficient ECO mode drastically cuts standby power consumption',
      'Side integrated waterproof touch panel with braille indicators',
      'Heated seat with adjustable temperature and slow-closing lid'
    ],
    featuresKr: [
      '전기분해 살균수로 유로, 노즐, 도기 안쪽까지 스스로 살균하는 스마트 케어',
      '전력 낭비를 막아주는 고효율 그린 에코(ECO) 모드',
      '방수 인증 일체형 사이드 조작 패널',
      '온열 시트 및 소프트 개폐 댐퍼 힌지'
    ],
    dimensions: 'Size R: 19.9 × 19.8 × 5.9 in | Size E: 19.9 × 21.0 × 5.9 in',
    imageEn: enAir05,
    imageKr: krWater10,
    originalAlt: 'coway-Price-EN-080125-09.jpg',
    pricing: [
      { period: '6 yrs', periodKr: '6년 약정', rentalFee: 27.99 },
      { period: '5 yrs', periodKr: '5년 약정', rentalFee: 29.99, purchasePrice: 999 },
      { period: '3 yrs', periodKr: '3년 약정', rentalFee: 34.99 }
    ],
    purchasePrice: 999,
    descriptionEn: 'The BAS-22 automatically disinfects its own internal flow lines and nozzle after every visit, ensuring pristine bathroom sanitation with low operating costs.',
    descriptionKr: '버튼을 누를 때마다 전기분해수로 노즐과 도기 표면을 스스로 살균하여 항상 새것처럼 청결하게 관리되는 스마트 비데입니다.',
    specificationDetails: {
      'Sanitization': 'Electrolyzed Sterilizing Water Care',
      'Eco Modes': 'Auto Sleep & Smart Sensor',
      'Sizes': 'Round & Elongated'
    }
  },
  {
    id: 'massage-chairs',
    model: 'Coway Massage Chairs (Mine & Noble)',
    nameEn: 'Coway Luxury Massage Chairs',
    nameKr: '코웨이 프리미엄 안마의자 (마인 & 노블)',
    category: 'massage',
    categoryLabelEn: 'Massage Chairs',
    categoryLabelKr: '안마의자',
    featuresEn: [
      'Free Delivery and Professional White-Glove Installation across DFW',
      'Zero gravity posture reclines pressure completely off your spine',
      'SL-Track 3D ergonomic rollers contour to every curve from neck to glutes',
      'Heated acupressure air cushions, calf kneading, and foot reflexology rollers'
    ],
    featuresKr: [
      '달라스-포트워스 전 지역 무료 배송 및 전문 기사 방문 설치',
      '체중 분산으로 척추 부담을 덜어주는 무중력(Zero Gravity) 리클라이닝',
      '목부터 엉덩이까지 섬세하게 마사지하는 인체공학 SL 트랙 3D 롤러',
      '온열 지압 에어백, 종아리 주무름 및 발바닥 롤러 장착'
    ],
    dimensions: 'Compact Living Room Fit',
    imageEn: enMassage01,
    imageKr: krMassage01,
    originalAlt: 'coway-Price-KR-working-082926-12.png',
    pricing: [
      { period: '6 yrs', periodKr: '6년 약정', rentalFee: 69.99 },
      { period: '5 yrs', periodKr: '5년 약정', rentalFee: 89.99, purchasePrice: 3299 },
      { period: '3 yrs', periodKr: '3년 약정', rentalFee: 109.99 }
    ],
    purchasePrice: 3299,
    descriptionEn: 'Experience the relaxing pinnacle of Korean wellness design in your home. Coway massage chairs feature compact living room proportions, zero-gravity recline, and soothing heat.',
    descriptionKr: '하루의 피로를 편안하게 풀어주는 코웨이 힐링 안마의자! 거실 인테리어에 어울리는 컴팩트 디자인과 온열 마사지로 최고의 휴식을 선사합니다.',
    specificationDetails: {
      'Delivery': 'Free Delivery & Installation in Dallas-Fort Worth',
      'Mechanism': 'SL-Track 3D Deep Tissue Roller System',
      'Recline': 'Zero-Gravity Position',
      'Heating': 'Lumbar & Calf Soothing Heat'
    }
  }
];
