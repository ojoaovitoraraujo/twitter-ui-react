import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../../components/Header/Header"
import { Separator } from "../../components/Separator/Separator"
import Tweet from "../../components/Tweet/Tweet"
import './Timeline.css'

export function Timeline() {

  const [newTweet, setNewTweet] = useState('')
  
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Meu segundo tweet',
    'Meu terceiro tweet'
  ])

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && event.ctrlKey) {
      createNewTweet(event)
    }
  }

  function createNewTweet(event: FormEvent) {
    event.preventDefault()
    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }
  return (
    <main className="timeline">

      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/ojoaovitoraraujo.png" alt="Joao Vitor Araujo" />
          <textarea 
            id="tweet" 
            placeholder="What's happening?" 
            value={newTweet} 
            onChange={(event) => { setNewTweet(event.target.value) }}
            onKeyDown={handleHotKeySubmit}
          ></textarea>
        </label>
        <button type='submit' onClick={createNewTweet}>Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  )
}