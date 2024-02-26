import { useState, FormEvent, KeyboardEvent } from "react"
import { Header } from "../../components/Header/Header"
import { Separator } from "../../components/Separator/Separator"
import Tweet from "../../components/Tweet/Tweet"
import './Status.css'


export function Status() {
  const [newAnswer, setNewAnswer] = useState('')

  const [answers, setAnswer] = useState([
    'Concordo',
    'Discordo',
    'Não sei',
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()
    setAnswer([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && event.ctrlKey) {
      createNewAnswer(event)
    }
  }

  return (
    <main className="status">

      <Header title="Home" />

      <Tweet content="Qual a sua opinião sobre o assunto?" />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/ojoaovitoraraujo.png" alt="Joao Vitor Araujo" />
          <textarea 
            id="tweet" 
            placeholder="Tweet your answer" 
            value={newAnswer} 
            onChange={(event) => setNewAnswer(event.target.value)}
            onKeyDown={handleHotKeySubmit}
          ></textarea>
        </label>
        <button type='submit'>Answer</button>
      </form>


      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}