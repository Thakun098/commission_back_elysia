import { validateAllInputs } from "../lib/validation";
import type { CalculateResponse } from "../lib/types";
const calculateSales = (locks: number, stocks: number, barrels: number): number => {
  return 45 * locks + 30 * stocks + 25 * barrels;
};
const calculateCommissionAmount = (sales: number): number => {
  let commission = 0;
  
  if (sales <= 1000) {
    commission = sales * 0.10;
  } else if (sales <= 1800) {
    commission = 1000 * 0.10 + (sales - 1000) * 0.15;
  } else {
    commission = 1000 * 0.10 + 800 * 0.15 + (sales - 1800) * 0.20;
  }
  
  return commission;
};
export const commissionCalculation = {
  calculateCommission: (
    name: string,
    locks: number,
    stocks: number,
    barrels: number
  ): CalculateResponse => {
    const validation = validateAllInputs(name, locks, stocks, barrels);
    
    if (!validation.isValid) {
      return {
        success: false,
        errors: validation.errors
      };
    }
    const sales = calculateSales(locks, stocks, barrels);
    const commission = calculateCommissionAmount(sales);

    return {
      success: true,
      data: {
        name,
        locks,
        stocks,
        barrels,
        sales,
        commission
      }
    };
  }
};
