// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {balance, income, expenses} = moneyDetails
  return (
    <ul className="money-details-list">
      <li className="details-item balance">
        <div className="details-icon">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
        </div>
        <div className="details">
          <p className="details-title">Your Balance</p>
          <p className="details-amount" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </li>
      <li className="details-item income">
        <div className="details-icon">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
        </div>
        <div className="details">
          <p className="details-title">Your Income</p>
          <p className="details-amount" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </li>
      <li className="details-item expenses">
        <div className="details-icon">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
        </div>
        <div className="details">
          <p className="details-title">Your Expenses</p>
          <p className="details-amount" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
