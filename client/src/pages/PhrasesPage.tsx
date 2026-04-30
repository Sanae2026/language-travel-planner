import { travelPhrases } from "../data/travelPhrases"
import { useState } from "react"

type Category = keyof typeof travelPhrases

export default function PhrasesPage() {
  const [category, setCategory] = useState<Category>("airport")

  return (
    <div style={{ padding: 20, maxWidth: 700, margin: "0 auto" }}>
      <h1>Travel Phrases ✈️</h1>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value as Category)}
      >
        <option value="airport">Airport</option>
        <option value="hotel">Hotel</option>
        <option value="restaurant">Restaurant</option>
        <option value="emergency">Emergency</option>
      </select>

      <div style={{ marginTop: 20 }}>
        {travelPhrases[category].map((p, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #ddd",
              padding: 12,
              marginBottom: 10,
              borderRadius: 8,
            }}
          >
            <p><b>EN:</b> {p.en}</p>
            <p><b>ES:</b> {p.es}</p>
            <p><b>FR:</b> {p.fr}</p>
            <p><b>DE:</b> {p.de}</p>
          </div>
        ))}
      </div>
    </div>
  )
}