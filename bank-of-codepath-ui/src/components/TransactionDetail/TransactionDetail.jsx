import * as React from "react"
import { formatAmount, formatDate } from "../../utils/format"
import "./TransactionDetail.css"
import { useState } from "react"
import { useParams } from "react-router-dom"
 
export default function TransactionDetail() {

  const [hasFetched, setHasFetched] = useState(false)
  const [transaction, setTransaction] = useState({}) 
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  return (
    <div className="transaction-detail">
      <TransactionCard />
    </div>
  )
}

export function TransactionCard({ transaction = {}, transactionId = null }) {
  return (
    <div className="transaction-card card">
      <div className="card-header">
        <h3>Transaction #{transactionId}</h3>
        <p className="category"></p>
      </div>

      <div className="card-content">
        <p className="description"></p>
      </div>

      <div className="card-footer">
        <p className={`amount ${transaction.amount < 0 ? "minus" : ""}`}>{formatAmount(transaction.amount)}</p>
        <p className="date">{formatDate(transaction.postedAt)}</p>
      </div>
    </div>
  )
}
