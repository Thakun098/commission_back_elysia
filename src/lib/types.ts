export interface CalculateRequest {
  name: string;
  locks: number;
  stocks: number;
  barrels: number;
}
export interface CalculateResponse {
  success: boolean;
  data?: {
    name: string;
    locks: number;
    stocks: number;
    barrels: number;
    sales: number;
    commission: number;
  };
  errors?: string[];
}
