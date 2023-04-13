import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const Option = props => {
  const {optionsObject} = props
  const {optionId, displayText} = optionsObject

  return <option value={optionId}>{displayText}</option>
}

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'Income',
    historyList: [],
    balance: 0,
    income: 0,
    expenses: 0,
  }

  onAddTitle = event => this.setState({title: event.target.value})

  onAddAmount = event => this.setState({amount: parseInt(event.target.value)})

  onSelectType = event => this.setState({type: event.target.textContent})

  onSubmit = event => {
    event.preventDefault()

    const {title, amount, type, balance, income, expenses} = this.state

    const newTransaction = {
      id: uuidV4(),
      title,
      amount,
      type,
    }

    let newBalance = balance
    let newIncome = income
    let newExpenses = expenses

    if (type === 'Income') {
      newBalance += amount
      newIncome += amount
    } else {
      newBalance -= amount
      newExpenses += amount
    }

    this.setState(prev => ({
      historyList: [...prev.historyList, newTransaction],
      title: '',
      amount: '',
      type: 'Income',
      balance: newBalance < 0 ? 0 : newBalance,
      income: newIncome,
      expenses: newExpenses,
    }))
  }

  onDelete = (id, type, amount) => {
    const {balance, income, expenses} = this.state

    let newBalance = balance
    let newIncome = income
    let newExpenses = expenses

    if (type === 'Income') {
      newBalance -= amount
      newIncome -= amount
    } else {
      newExpenses -= amount
    }

    this.setState(prev => ({
      historyList: prev.historyList.filter(
        eachHistory => eachHistory.id !== id,
      ),
      balance: newBalance < 0 ? 0 : newBalance,
      income: newIncome,
      expenses: newExpenses,
    }))
  }

  render() {
    const {
      type,
      title,
      amount,
      balance,
      income,
      expenses,
      historyList,
    } = this.state
    const moneyDetails = {balance, income, expenses}

    return (
      <div className="container">
        <div className="cont-wrapper">
          {/* profile name section */}
          <div className="profile-container">
            <h1>Hi, Sanjay Sahu</h1>
            <p>
              Welcome back to your{' '}
              <span className="greeting-title">Money Manager</span>
            </p>
          </div>
          {/* profile ends here */}

          {/* money transactions */}
          <div className="money-details">
            <MoneyDetails moneyDetails={moneyDetails} />
          </div>
          {/* money details ends here */}

          {/* Transactions list and form sections starts here */}
          <div className="money-transactions">
            {/* transaction form */}
            <div className="transactions-form">
              <h2>Add Transaction</h2>
              <form className="form" onSubmit={this.onSubmit}>
                <label htmlFor="title">TITLE</label>
                <input
                  id="title"
                  type="text"
                  placeholder="TITLE"
                  value={title}
                  onChange={this.onAddTitle}
                />
                <label htmlFor="number">AMOUNT</label>
                <input
                  id="number"
                  type="number"
                  value={amount}
                  placeholder="AMOUNT"
                  onChange={this.onAddAmount}
                />
                <label htmlFor="type">TYPE</label>
                <select
                  id="type"
                  value={type}
                  name="type"
                  onChange={this.onSelectType}
                >
                  {transactionTypeOptions.map(eachOption => (
                    <Option
                      optionsObject={eachOption}
                      key={eachOption.optionId}
                    />
                  ))}
                </select>
                <button type="submit" className="submit-btn">
                  Add
                </button>
              </form>
            </div>

            {/* transaction history list */}
            <div className="transactions-history">
              <h2>History</h2>
              <div className="list-container">
                <div className="history-header history-item">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                </div>
                <ul className="history-list">
                  {historyList.map(eachObject => (
                    <TransactionItem
                      key={eachObject.id}
                      historyObject={eachObject}
                      onDelete={this.onDelete}
                    />
                  ))}
                </ul>
              </div>
            </div>
            {/* history list ends here */}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
