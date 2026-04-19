import { useEffect, useState } from "react";
import { getPhrases } from "../api/client";

export default function PhraseList() {
  const [phrases, setPhrases] = useState<string[]>([]);

  useEffect(() => {
    getPhrases("english").then((data) => {
      setPhrases(data.phrases);
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Frases en inglés</h2>

      {phrases.map((phrase, i) => (
        <p key={i}>{phrase}</p>
      ))}
    </div>
  );
}