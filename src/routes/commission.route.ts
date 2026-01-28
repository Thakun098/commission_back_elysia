import { Elysia, t } from "elysia";
import { commissionCalculation } from "../controller/calculation.controller";
const calculateSchema = t.Object({
  name: t.String(),
  locks: t.Number(),
  stocks: t.Number(),
  barrels: t.Number()
});
export const commissionRoute = new Elysia({ prefix: '/api/commission' })
  .get('/', () => {
    return { message: "Commission Calculator API", version: "1.0.0" };
  })
  .post('/calculate', ({ body }) => {
    const { name, locks, stocks, barrels } = body;
    const result = commissionCalculation.calculateCommission(name, locks, stocks, barrels);
    return result;
  }, {
    body: calculateSchema
  });