import { SalesInfoModel } from '@/constants/definition';
import { cleaningItemInfo } from '@/constants/productTable';

/**
 *
 * @param salesData 세척대수 정보추출 파라미터
 * @param price 계산할 금액
 * @returns 세척대수만큼 곱하여 반환
 */
const adjustItemQuantity = (salesData: SalesInfoModel, price: number | undefined) => {
  if (!!salesData.itemQuantity && price) return price * salesData.itemQuantity;
};

/**
 *
 * @param salesData 할인여부와 할인율 파라미터
 * @returns '%' 포함일 시 백분율계산, '-' 포함일 시 차액만큼 차감하여 반환
 */
const applyDiscount = (salesData: SalesInfoModel, price: number | undefined) => {
  if (salesData.discountRatio.startsWith('-') && price)
    return price - Number(salesData.discountRatio.split('-')[1]);
  else if (salesData.discountRatio.includes('%') && price)
    return price * (parseFloat(salesData.discountRatio.split('%')[0]) / 100);
};

/**
 *
 * @param salesData 클라이언트 입력정보 파라미터
 * @param price 일반,종합,빌트인,범위에 따라 금액 파라미터로 전달
 * @returns
 */
const calculatePrice = (salesData: SalesInfoModel, price: number | undefined) => {
  let tempPrice = adjustItemQuantity(salesData, price);

  // 할인여부에 따라 분기
  if (salesData.isDiscounted) {
    tempPrice = applyDiscount(salesData, tempPrice);
  }

  return tempPrice;
};

/**
 *
 * @param salesData 클라이언트 측에서 선택한 제품정보
 * @returns productTable 에서 동일한 문자열 탐색하여 반환
 */
const findMatchedProduct = (salesData: SalesInfoModel) => {
  const tempAircon = cleaningItemInfo.airconditional.filter((element) => {
    return element.label === salesData.item;
  });
  const tempWashingMachine = cleaningItemInfo.washing.filter((element) => {
    return element.label === salesData.item;
  });

  // airconditional에서 찾은 경우 해당 결과 반환
  if (tempAircon.length > 0) return tempAircon[0];
  // washing에서 찾은 경우 해당 결과 반환
  if (tempWashingMachine.length > 0) return tempWashingMachine[0];
};

export const calculateComplexPrice = (salesData: SalesInfoModel): number | undefined => {
  let finalPrice: number | undefined = 0;
  const productInfo = findMatchedProduct(salesData);
  const isAllrounderProduct =
    productInfo && 'compositePrice' in productInfo && 'regularPrice' in productInfo;
  const isOnlyCompositeProduct =
    productInfo && 'compositePrice' in productInfo && !('regularPrice' in productInfo);
  const isDefaultProduct = productInfo && 'defaultPrice' in productInfo;
  const isLaundryProduct = productInfo && 'smallPrice' in productInfo;

  // 종합, 일반세척
  if (productInfo && 'compositePrice' in productInfo && 'regularPrice' in productInfo) {
    const { compositePrice, regularPrice } = productInfo;

    salesData.isComposite
      ? (finalPrice = calculatePrice(salesData, compositePrice))
      : (finalPrice = calculatePrice(salesData, regularPrice));

    return finalPrice;
  } else if (productInfo && 'compositePrice' in productInfo && !('regularPrice' in productInfo)) {
    const { compositePrice } = productInfo;
    finalPrice = calculatePrice(salesData, compositePrice);
    return finalPrice;
  }
  // 고정단가
  else if (productInfo && 'defaultPrice' in productInfo) {
    const { defaultPrice } = productInfo;
    let defaultProduct = calculatePrice(salesData, defaultPrice);
    return defaultProduct;
  }
  // 소 / 중 / 대 세탁기
  else if (productInfo && 'smallPrice' in productInfo) {
    const { smallPrice, mediumPrice, largePrice, builtInPrice } = productInfo;
    console.log('소 / 중 / 대 구분할 지표나 상태변수가 필요함...');
    console.log('소형 가격 : ' + smallPrice);
    console.log('중형 가격 : ' + mediumPrice);
    console.log('대형 가격 : ' + largePrice);
    console.log('빌트인 가격 : ' + builtInPrice);
    return 0;
  }

  return finalPrice;
};
