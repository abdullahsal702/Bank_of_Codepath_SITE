import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"
import TransactionDetail from "../TransactionDetail/TransactionDetail"
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [transfers, setTransfers] = useState([])
  const [error, setError] = useState(null)
  const [filterInputValue, setFilterInputValue] = useState("")
  const [newTransactionForm, setNewTransactionForm] = useState({
    id: "",
    postedAt: "",
    category : "", 
    description : "", 
    amount : 0,
  })
  const [isCreating, setIsCreating] = useState(false)

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar filterInputValue={filterInputValue} setFilterInputValue={setFilterInputValue}/>
        <main>
          <Routes>
            <Route path="/" 
              element=
                {<Home 
                  isLoading={isLoading} 
                  setIsLoading={setIsLoading}
                  transactions={transactions}
                  setTransactions={setTransactions}
                  transfers={transfers}
                  setTransfers={setTransfers}
                  error={error}
                  setError={setError}
                  filterInputValue={filterInputValue}
                  newTransactionForm={newTransactionForm}
                  setNewTransactionForm={setNewTransactionForm}
                  isCreating={isCreating}
                  setIsCreating={setIsCreating}
                />}>
            </Route>
            <Route path="/transactions/:transactionId" element={<TransactionDetail />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
