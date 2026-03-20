import { use, useState, useEffect } from 'react'

const Card = ({ title }) => {
  const [count, setCount] = useState(0);

  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`)
  }, [hasLiked, title]);

  useEffect(() => {
    console.log("Card rendered")
  }, []);

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h3>{title}</h3>
      <p>{count || null}</p>

      <button onClick={() => setHasLiked(!hasLiked)} >
        {hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  )
}

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" rating={5} isCool={true} />
      <Card title="Lion King" />
      <Card title="Niggas" />
    </div>
  )
}

export default App
