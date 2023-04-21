import './App.css'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className="App">
      <TwitterFollowCard userName="panchi">
        Pandi Mochi
      </TwitterFollowCard>
      <TwitterFollowCard userName="camith">
        Camila Smith
      </TwitterFollowCard>  
    </section>
  )
}