import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";

const metricEndpoints = {
  ari: "/api/ari",
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
  smog: "/api/smog",
  spache: "/api/spache",
  speaking_time: "/api/speaking-time",
  syllables: "/api/syllables",
  syllables_per_word: "/api/syllables-per-word",
  words: "/api/words",
  words_per_sentence: "/api/words-per-sentence",
};

const fetchMetric = (text: string, endpoint: string, setMetricValue: Function) => {
  fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: text,
  })
    .then((response) => response.json())
    .then((data) => {
      setMetricValue(data);
    })
    .catch((error) => console.error(`Error fetching metric from ${endpoint}:`, error));
};

const onTextInput = (
  event: React.ChangeEvent<HTMLTextAreaElement>,
  setMetrics: Function
) => {
  const text = event.target.value.trim();
  if (!text) {
    setMetrics({
      ari: 0,
      characters: 0,
      characters_per_word: 0,
      coleman_liau: 0,
      dale_chall: 0,
      flesch_kincaid_grade_level: 0,
      flesch_reading_ease_score: 0,
      gunning_fog: 0,
      lines: 0,
      paragraphs: 0,
      reading_time: 0,
      sentences: 0,
      sentences_per_paragraph: 0,
      smog: 0,
      spache: 0,
      speaking_time: 0,
      syllables: 0,
      syllables_per_word: 0,
      words: 0,
      words_per_sentence: 0,
    });
    return;
  }
  for (const [metric, endpoint] of Object.entries(metricEndpoints)) {
    fetchMetric(text, endpoint, (value: number) => {
      setMetrics((prevMetrics: any) => ({
        ...prevMetrics,
        [metric]: value,
      }));
    });
  }
};

const App = () => {
  const [metrics, setMetrics] = useState({
    ari: 0,
    characters: 0,
    characters_per_word: 0,
    coleman_liau: 0,
    dale_chall: 0,
    flesch_kincaid_grade_level: 0,
    flesch_reading_ease_score: 0,
    gunning_fog: 0,
    lines: 0,
    paragraphs: 0,
    reading_time: 0,
    sentences: 0,
    sentences_per_paragraph: 0,
    smog: 0,
    spache: 0,
    speaking_time: 0,
    syllables: 0,
    syllables_per_word: 0,
    words: 0,
    words_per_sentence: 0,
  });

  return (
    <React.StrictMode>
      <Header />
      <main className="main">
        <div className="textarea-container">
          <textarea
            id="readability-textarea"
            className="textarea"
            placeholder="Paste or type your text here..."
            onInput={(event: React.ChangeEvent<HTMLTextAreaElement>) => onTextInput(event, setMetrics)}
          />
        </div>
          <div className="metrics">
            <div className="metric">Automated Readability Index (ARI): {metrics.ari}</div>
            <div className="metric">Characters: {metrics.characters}</div>
            <div className="metric">Characters per Word: {metrics.characters_per_word}</div>
            <div className="metric">Coleman-Liau Index: {metrics.coleman_liau}</div>
            <div className="metric">Dale-Chall Readability Score: {metrics.dale_chall}</div>
            <div className="metric">Flesch-Kincaid Grade Level: {metrics.flesch_kincaid_grade_level}</div>
            <div className="metric">Flesch Reading Ease Score: {metrics.flesch_reading_ease_score}</div>
            <div className="metric">Gunning Fog Index: {metrics.gunning_fog}</div>
            <div className="metric">Lines: {metrics.lines}</div>
            <div className="metric">Paragraphs: {metrics.paragraphs}</div>
            <div className="metric">Reading Time: {metrics.reading_time}</div>
            <div className="metric">Sentences: {metrics.sentences}</div>
            <div className="metric">Sentences per Paragraph: {metrics.sentences_per_paragraph}</div>
            <div className="metric">SMOG Index: {metrics.smog}</div>
            <div className="metric">Spache Index: {metrics.spache}</div>
            <div className="metric">Speaking Time: {metrics.speaking_time}</div>
            <div className="metric">Syllables: {metrics.syllables}</div>
            <div className="metric">Syllables per Word: {metrics.syllables_per_word}</div>
            <div className="metric">Words: {metrics.words}</div>
            <div className="metric">Words per Sentence: {metrics.words_per_sentence}</div>
          </div>
      </main>
      <Footer />
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("root") as HTMLDivElement;
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
