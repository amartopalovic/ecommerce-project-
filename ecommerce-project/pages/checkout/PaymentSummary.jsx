import { formatMoney } from "../../src/utils/money";

export function PaymentSummary({ paymentSummary }) {
  if (!paymentSummary) {
    return (
      <div className="payment-summary">
        <div className="payment-summary-title">Payment Summary</div>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="payment-summary">
      <div className="payment-summary-title">Payment Summary</div>

      <div className="payment-summary-row">
        <div>Items ({paymentSummary.totalItems}):</div>
        <div className="payment-summary-money">
          {formatMoney(paymentSummary.productCostCents)}
        </div>
      </div>

      <div className="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div className="payment-summary-money">
          {formatMoney(paymentSummary.shippingCostCents)}
        </div>
      </div>

      {paymentSummary.discountCents > 0 && (
        <div className="payment-summary-row">
          <div>Discount:</div>
          <div className="payment-summary-money">
            -{formatMoney(paymentSummary.discountCents)}
          </div>
        </div>
      )}

      <div className="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div className="payment-summary-money">
          {formatMoney(paymentSummary.totalCostBefireTaxCents)}
        </div>
      </div>

      <div className="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div className="payment-summary-money">
          {formatMoney(paymentSummary.taxCents)}
        </div>
      </div>

      <div className="payment-summary-row total-row">
        <div>Order total:</div>
        <div className="payment-summary-money">
          {formatMoney(paymentSummary.totalCostCents)}
        </div>
      </div>

      <button className="place-order-button button-primary">
        Place your order
      </button>
    </div>
  );
}
