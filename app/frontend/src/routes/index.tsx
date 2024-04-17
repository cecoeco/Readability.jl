import { createSignal, createEffect } from "solid-js";

import "../assets/scss/index.scss";
import "../assets/scss/modals.scss";
import ARI from "../components/ari.jsx";
import Reading from "../components/average_reading_time.jsx";
import Speaking from "../components/average_speaking_time.jsx";
import CL from "../components/coleman-liau.jsx";
import DC from "../components/dale-chall.jsx";
import FRES from "../components/fres.jsx";
import FKGL from "../components/fkgl.jsx";
import GF from "../components/gunning_fog.jsx";
import SMOG from "../components/smog.jsx";
import Spache from "../components/spache.jsx";

function Metrics() {
  const [isDropdownOpen, setIsDropdownOpen] = createSignal(false);
  const [iconRotated, setIconRotated] = createSignal(false);
  const [selectedMetrics, setSelectedMetrics] = createSignal(
    new Set([
      "Automatic Readability Index (ARI)",
      "Average Reading Time",
      "Average Speaking Time",
      "Characters",
      "Coleman-Liau",
      "Dale-Chall",
      "Flesch Reading Ease Score",
      "Flesch-Kincaid Grade Level",
      "Gunning Fog",
      "Sentences",
      "Simple Measure of Gobbledygook (SMOG)",
      "Spache",
      "Syllables",
      "Words",
    ])
  );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen());
    setIconRotated(!iconRotated());
  };

  const toggleMetric = (metric: string) => {
    const updatedMetrics = new Set(selectedMetrics());
    if (updatedMetrics.has(metric)) {
      updatedMetrics.delete(metric);
    } else {
      updatedMetrics.add(metric);
    }
    setSelectedMetrics(updatedMetrics);
  };

  const selectAllMetrics = () => {
    const allMetrics = new Set([
      "Automatic Readability Index (ARI)",
      "Average Reading Time",
      "Average Speaking Time",
      "Characters",
      "Coleman-Liau",
      "Dale-Chall",
      "Flesch Reading Ease Score",
      "Flesch-Kincaid Grade Level",
      "Gunning Fog",
      "Sentences",
      "Simple Measure of Gobbledygook (SMOG)",
      "Spache",
      "Syllables",
      "Words",
    ]);
    setSelectedMetrics(allMetrics);
  };

  /**
   * Closes the dropdown if the click event target does not have a parent
   * element with the class "dropdown".
   *
   * @param {MouseEvent} event - The click event.
   */
  const closeDropdownOnOutsideClick = (event: MouseEvent) => {
    if (!(event.target as Element).closest(".dropdown")) {
      setIsDropdownOpen(false);
      setIconRotated(false);
    }
  };

  createEffect(() => {
    if (isDropdownOpen()) {
      document.body.addEventListener(
        "click",
        closeDropdownOnOutsideClick
      );
    } else {
      document.body.removeEventListener(
        "click",
        closeDropdownOnOutsideClick
      );
    }
    return () => {
      document.body.removeEventListener(
        "click",
        closeDropdownOnOutsideClick
      );
    };
  });

  const [showARI, setShowARI] =
    createSignal(false);
  function openARIModal() {
    setShowARI(true);
  }

  const [showReading, setShowReading] =
    createSignal(false);
  function openReadingModal() {
    setShowReading(true);
  }

  const [showSpeaking, setShowSpeaking] =
    createSignal(false);
  function openSpeakingModal() {
    setShowSpeaking(true);
  }

  const [showCL, setShowCL] =
    createSignal(false);
  function openCLModal() {
    setShowCL(true);
  }

  const [showDC, setShowDC] =
    createSignal(false);
  function openDCModal() {
    setShowDC(true);
  }

  const [showFRES, setshowFRES] =
    createSignal(false);
  function openFRESModal() {
    setshowFRES(true);
  }

  const [showFKGL, setshowFKGL] =
    createSignal(false);
  function openFKGLModal() {
    setshowFKGL(true);
  }

  const [showGF, setShowGF] =
    createSignal(false);
  function openGFModal() {
    setShowGF(true);
  }

  const [showSMOG, setShowSMOG] =
    createSignal(false);
  function openSMOGModal() {
    setShowSMOG(true);
  }

  const [showSpache, setShowSpache] =
    createSignal(false);
  function openSpacheModal() {
    setShowSpache(true);
  }

  const [metricResponses, setMetricResponses] =
    createSignal({
      "Automatic Readability Index (ARI)": 0,
      "Average Reading Time": 0,
      "Average Speaking Time": 0,
      Characters: 0,
      "Coleman-Liau": 0,
      "Dale-Chall": 0,
      "Flesch Reading Ease Score": 0,
      "Flesch-Kincaid Grade Level": 0,
      "Gunning Fog": 0,
      Sentences: 0,
      "Simple Measure of Gobbledygook (SMOG)": 0,
      Spache: 0,
      Syllables: 0,
      Words: 0,
    });

  /**
   * Sends a POST request to the specified route with the provided text data.
   * @param metricType The name of the metric to update in the metricResponses signal.
   * @param route The API route to send the request to.
   * @returns Promise<void>
   * @throws Error if the network response is not ok.
   */
  async function postData(metricType: string, route: string): Promise<void> {
    const text: string = (document.querySelector("textarea") as HTMLTextAreaElement).value;
    const endpoint: string = `https://readability-jl-api.onrender.com/${route}`;
    try {
      const response: Response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: text,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData: string = await response.text();
      setMetricResponses((prevResponses: MetricResponses) => ({
        ...prevResponses,
        [metricType]: responseData,
      }));
    } catch (error: unknown) {
      console.error("Error:", error);
    }
  }

  /* Type definitions */
  type MetricResponses = {
    [key: string]: number;
    "Automatic Readability Index (ARI)": number,
    "Average Reading Time": number,
    "Average Speaking Time": number,
    Characters: number,
    "Coleman-Liau": number,
    "Dale-Chall": number,
    "Flesch Reading Ease Score": number,
    "Flesch-Kincaid Grade Level": number,
    "Gunning Fog": number,
    Sentences: number,
    "Simple Measure of Gobbledygook (SMOG)": number,
    Spache: number,
    Syllables: number,
    Words: number
  };

  let debounceTimeout: NodeJS.Timeout;

  async function onTextInput() {
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(async () => {
      const metrics = [
        "Automatic Readability Index (ARI)",
        "Average Reading Time",
        "Average Speaking Time",
        "Characters",
        "Coleman-Liau",
        "Dale-Chall",
        "Flesch Reading Ease Score",
        "Flesch-Kincaid Grade Level",
        "Gunning Fog",
        "Sentences",
        "Simple Measure of Gobbledygook (SMOG)",
        "Spache",
        "Syllables",
        "Words",
      ];

      const routes = [
        "ari",
        "average_reading_time",
        "average_speaking_time",
        "characters",
        "coleman-liau",
        "dale-chall",
        "fres",
        "fkgl",
        "gunning_fog",
        "sentences",
        "smog",
        "spache",
        "syllables",
        "words",
      ];

      for (let i = 0; i < metrics.length; i++) {
        const metric = metrics[i];
        const route = routes[i];
        await postData(metric, route);
      }
    }, 1500);
  }

  function downloadMetrics() {
    const data: { [key: string]: number } = metricResponses();
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "metric,value\n" +
      Object.keys(data)
        .map((key) => {
          return `${key},${data[key]}`;
        })
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "readability.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <ARI showARIModal={[showARI, setShowARI]} />
      <Reading showReadingModal={[showReading, setShowReading]} />
      <Speaking showSpeakingModal={[showSpeaking, setShowSpeaking]} />
      <CL showCLModal={[showCL, setShowCL]} />
      <DC showDCModal={[showDC, setShowDC]} />
      <FRES showFRESModal={[showFRES, setshowFRES]} />
      <FKGL showFKGLModal={[showFKGL, setshowFKGL]} />
      <GF showGFModal={[showGF, setShowGF]} />
      <SMOG showSMOGModal={[showSMOG, setShowSMOG]} />
      <Spache showSpacheModal={[showSpache, setShowSpache]} />
      <div class="metrics-page">
        <textarea
          title="Type here..."
          name="Type here..."
          placeholder="Type here..."
          onInput={onTextInput}
        />
        <div class="metrics-container">
          <div class="dropdown">
            <button
              id="dropdown-button"
              title="Select Metrics"
              class="dropdown-button"
              type="button"
              onClick={toggleDropdown}
            >
              <label for="dropdown-button" class="dropdown-button-label">
                Select Metrics
              </label>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class={
                iconRotated()
                  ? "dropdown-button-chevron rotated"
                  : "dropdown-button-chevron"
              }><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </button>
            <div class={`dropdown-content ${isDropdownOpen() ? "open" : 0}`}>
              <label class="dropdown-label">
                <input
                  name="Select All"
                  title="Select All"
                  type="checkbox"
                  checked={selectedMetrics().size === 14}
                  onChange={selectAllMetrics}
                />
                Select All
              </label>
              {[
                "Automatic Readability Index (ARI)",
                "Average Reading Time",
                "Average Speaking Time",
                "Characters",
                "Coleman-Liau",
                "Dale-Chall",
                "Flesch Reading Ease Score",
                "Flesch-Kincaid Grade Level",
                "Gunning Fog",
                "Sentences",
                "Simple Measure of Gobbledygook (SMOG)",
                "Spache",
                "Syllables",
                "Words",
              ].map((metric) => (
                <label class="dropdown-label">
                  <input
                    name={metric}
                    title={metric}
                    type="checkbox"
                    checked={selectedMetrics().has(metric)}
                    onChange={() => toggleMetric(metric)}
                  />
                  {metric}
                </label>
              ))}
            </div>
          </div>
          <div class="metrics">
            {Array.from(selectedMetrics()).map((metric) =>
              (
                metric === "Characters" ||
                metric === "Sentences" ||
                metric === "Syllables" ||
                metric === "Words"
              ) ? (
                <div title={metric + ": " + metricResponses()[metric]} class="metric">
                  <h1>{metric}</h1>
                  <div class="metric-value">{metricResponses()[metric]}</div>
                </div>
              ) : (
                <div title={metric + ": " + metricResponses()[metric]} class="metric">
                  <div class="metric-name">
                    <h1>{metric}</h1>
                    <button
                      class="info-button"
                      onClick={() => {
                        switch (metric) {
                          case "Automatic Readability Index (ARI)":
                            openARIModal();
                            break;
                          case "Average Reading Time":
                            openReadingModal();
                            break;
                          case "Average Speaking Time":
                            openSpeakingModal();
                            break;
                          case "Coleman-Liau":
                            openCLModal();
                            break;
                          case "Dale-Chall":
                            openDCModal();
                            break;
                          case "Flesch Reading Ease Score":
                            openFRESModal();
                            break;
                          case "Flesch-Kincaid Grade Level":
                            openFKGLModal();
                            break;
                          case "Gunning Fog":
                            openGFModal();
                            break;
                          case "Simple Measure of Gobbledygook (SMOG)":
                            openSMOGModal();
                            break;
                          case "Spache":
                            openSpacheModal();
                            break;
                          default:
                            break;
                        }
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="info-icon"><path d="M481.013-274.001q17.756 0 30.371-12.625Q523.999-299.25 523.999-317v-160.001q0-17.749-12.628-30.374Q498.742-520 480.987-520q-17.756 0-30.371 12.625-12.615 12.625-12.615 30.374V-317q0 17.75 12.628 30.374 12.629 12.625 30.384 12.625Zm-1.188-330.46q17.906 0 30.194-12.113 12.288-12.112 12.288-30.018t-12.113-30.195q-12.113-12.288-30.019-12.288t-30.194 12.113q-12.288 12.113-12.288 30.019t12.113 30.194q12.113 12.288 30.019 12.288Zm.242 536.46q-85.476 0-160.684-32.44-75.209-32.44-130.842-88.05-55.634-55.611-88.087-130.789-32.453-75.177-32.453-160.653 0-85.732 32.499-161.166 32.499-75.433 88.21-131.234 55.712-55.8 130.788-87.733 75.075-31.933 160.435-31.933 85.722 0 161.148 31.92 75.425 31.92 131.238 87.71 55.814 55.791 87.747 131.212 31.933 75.421 31.933 161.173 0 85.753-31.92 160.621-31.92 74.869-87.697 130.603-55.778 55.735-131.18 88.247-75.403 32.512-161.135 32.512ZM480-154q136.513 0 231.256-94.744Q806-343.487 806-480t-94.744-231.256Q616.513-806 480-806t-231.256 94.744Q154-616.513 154-480t94.744 231.256Q343.487-154 480-154Zm0-326Z" /></svg>
                    </button>
                  </div>
                  <div class="metric-value">{metricResponses()[metric]}</div>
                </div>
              )
            )}
          </div>
          <button
            title="Download Metrics"
            type="button"
            onClick={downloadMetrics}
            class="download-button"
          >
            Download Metrics
          </button>
        </div>
      </div>
    </>
  );
}

export default Metrics;
