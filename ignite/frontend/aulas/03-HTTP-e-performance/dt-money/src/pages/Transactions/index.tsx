import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transactions {
  id: number,
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}


export function Transactions() {
  const [transactions, setTransactions] = useState<Transactions[]>([])

  const loadTransactions = async () => {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <div>
    <Header />
    <Summary/>

      <TransactionsContainer>
      <SearchForm />

        <TransactionsTable>
          <tbody>
            {
              transactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      R$ {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
                )
              })
            }
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}