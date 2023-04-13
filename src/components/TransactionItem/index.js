// Write your code here
import './index.css'
// import {on} from 'events'

const TransactionItem = props => {
  const {historyObject, onDelete} = props
  const {title, amount, type, id} = historyObject
  let typeText
  switch (type) {
    case 'INCOME':
      typeText = 'Income'
      break
    case 'EXPENSES':
      typeText = 'Expenses'
      break
    default:
      typeText = 'Income'
      break
  }

  const deleteHistoryItem = () => onDelete(id, type, amount)

  return (
    <li className="history-item">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{typeText}</p>
      <button
        className="del-btn"
        type="button"
        data-testid="delete"
        onClick={deleteHistoryItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
