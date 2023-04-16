import './App.css'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing={false} userName="panchi" name="Pandi Mochi" />
      <TwitterFollowCard isFollowing userName="camith" name="Camila Smith" />
      <TwitterFollowCard isFollowing={false} userName="gummibeer" name="Pandi Mochi" />
    </section>
  )
}