import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";

type MetricKey = keyof typeof metricEndpoints;
type Metrics = Record<MetricKey, number>;

const metricEndpoints = {
  automatic_reading_index: "/api/ari",
  characters: "/api/characters",
  characters_per_word: "/api/characters-per-word",
  coleman_liau: "/api/coleman-liau",
  dale_chall: "/api/dale-chall",
  flesch_kincaid_grade_level: "/api/flesch-kincaid-grade-level",
  flesch_reading_ease_score: "/api/flesch-reading-ease-score",
  gunning_fog: "/api/gunning-fog",
  lines: "/api/lines",
  paragraphs: "/api/paragraphs",
  reading_time: "/api/reading-time",
  sentences: "/api/sentences",
  sentences_per_paragraph: "/api/sentences-per-paragraph",
  simple_measure_of_gobbledygook: "/api/smog",
  spache: "/api/spache",
  speaking_time: "/api/speaking-time",
  syllables: "/api/syllables",
  syllables_per_word: "/api/syllables-per-word",
  words: "/api/words",
  words_per_sentence: "/api/words-per-sentence",
} as const;

const fetchMetric = (
  text: string,
  endpoint: string,
  setMetricValue: (value: number) => void
) => {
  fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: text,
  })
    .then((response) => response.json())
    .then((data: number) => {
      setMetricValue(data);
    })
    .catch((error) => console.error(`Error fetching metric from ${endpoint}:`, error));
};

const onTextInput = (
  event: React.ChangeEvent<HTMLTextAreaElement>,
  setMetrics: React.Dispatch<React.SetStateAction<Metrics>>
) => {
  const text = event.target.value.trim();
  const resetMetrics: Metrics = Object.keys(metricEndpoints).reduce((acc, key) => {
    acc[key as MetricKey] = 0;
    return acc;
  }, {} as Metrics);
  
  if (!text) {
    setMetrics(resetMetrics);
    return;
  }

  (Object.entries(metricEndpoints) as [MetricKey, string][]).forEach(([metric, endpoint]) => {
    fetchMetric(text, endpoint, (value: number) => {
      setMetrics((prevMetrics) => ({
        ...prevMetrics,
        [metric]: value,
      }));
    });
  });
};

const App: React.FC = () => {
  const initialMetrics: Metrics = Object.keys(metricEndpoints).reduce((acc, key) => {
    acc[key as MetricKey] = 0;
    return acc;
  }, {} as Metrics);

  const [metrics, setMetrics] = useState<Metrics>(initialMetrics);

  return (
    <React.StrictMode>
      <Header />
      <main className="main">
        <div className="textarea-container">
          <textarea
            id="readability-textarea"
            className="textarea"
            placeholder="Paste or type your text here..."
            spellCheck="false"
            onInput={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              onTextInput(event, setMetrics)
            }
          />
        </div>
        <div className="metrics">
          {Object.entries(metrics).map(([metric, value]) => (
            <div key={metric} className="metric">
              {metric.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}: {value}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("root") as HTMLDivElement;

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
