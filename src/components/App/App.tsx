import React, { useEffect, useState } from 'react'
import './App.scss'
import icons from './icons.svg'

/* interface AppProps {} */

interface IPerson {
  id: string
  name: string
  age: number
  balance: string
}

const App: React.FC = () => {
  const [persons, setPersons] = useState<Array<IPerson>>([])
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  useEffect(() => {
    // eslint-disable-next-line
    ;(async () => {
      try {
        const response = await fetch('http://localhost:3001/persons')
        const json = await response.json()
        setPersons(json)
      } catch (err) {
        throw new Error(err)
      }
    })()
  }, [])

  const sortBy = (label: keyof IPerson) => {
    const tmp = persons.slice()

    tmp.sort((a, b) => {
      if (a[label] < b[label]) {
        return sortOrder === 'asc' ? -1 : 1
      }
      if (a[label] > b[label]) {
        return sortOrder === 'asc' ? 1 : -1
      }
      return 0
    })
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    setPersons(tmp)
  }

  return (
    <div className="container">
      <div className="table">
        <div className="table-head">
          <div className="table-head__cell">
            <p>Name</p>
            <button type="button" onClick={sortBy.bind(null, 'name')}>
              <svg>
                <use xlinkHref={`${icons}#sort`} />
              </svg>
            </button>
          </div>
          <div className="table-head__cell">
            <p>Age</p>
            <button type="button" onClick={sortBy.bind(null, 'age')}>
              <svg>
                <use xlinkHref={`${icons}#sort`} />
              </svg>
            </button>
          </div>
          <div className="table-head__cell">
            <p>Balance</p>
            <button type="button" onClick={sortBy.bind(null, 'balance')}>
              <svg>
                <use xlinkHref={`${icons}#sort`} />
              </svg>
            </button>
          </div>
        </div>
        {persons.map((p) => (
          <div className="table-row" key={p.id}>
            <div className="table-row__cell">
              <p>{p.name}</p>
            </div>
            <div className="table-row__cell">
              <p>{p.age}</p>
            </div>
            <div className="table-row__cell">
              <p>${p.balance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
