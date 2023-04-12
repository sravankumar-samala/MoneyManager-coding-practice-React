// Write your code here
import './index.css'
// import {on} from 'events'

const TransactionItem = props => {
  const {historyObject, onDelete} = props
  const {title, amount, type, id} = historyObject

  const deleteHistoryItem = () => onDelete(id, type, amount)

  return (
    <li className="history-item">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
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
