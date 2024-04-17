import { createSignal, createEffect } from "solid-js";

import "../assets/css/metrics.css";
import Chevron from "../assets/svg/chevron.svg";
import Info from "../assets/svg/info.svg";

import "../assets/css/modals.css";
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

    const toggleMetric = (metric) => {
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

    const closeDropdownOnOutsideClick = (event) => {
        if (!event.target.closest(".dropdown")) {
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

    const [showARI, setShowARI] = createSignal(false);
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

    const [showCL, setShowCL] = createSignal(false);
    function openCLModal() {
        setShowCL(true);
    }

    const [showDC, setShowDC] = createSignal(false);
    function openDCModal() {
        setShowDC(true);
    }

    const [showFRES, setshowFRES] = createSignal(false);
    function openFRESModal() {
        setshowFRES(true);
    }

    const [showFKGL, setshowFKGL] = createSignal(false);
    function openFKGLModal() {
        setshowFKGL(true);
    }

    const [showGF, setShowGF] = createSignal(false);
    function openGFModal() {
        setShowGF(true);
    }

    const [showSMOG, setShowSMOG] = createSignal(false);
    function openSMOGModal() {
        setShowSMOG(true);
    }

    const [showSpache, setShowSpache] = createSignal(false);
    function openSpacheModal() {
        setShowSpache(true);
    }

    const [metricResponses, setMetricResponses] = createSignal({
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

    async function postData(metricType, route) {
        const text = document.querySelector("textarea").value;
        const endpoint = `https://readability-jl-api.onrender.com/${route}`;
        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "text/plain" },
                body: text,
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const responseData = await response.text();
            setMetricResponses((prevResponses) => ({
                ...prevResponses,
                [metricType]: responseData,
            }));
        } catch (error) {
            console.error("Error:", error);
        }
    }

    async function onTextChange() {
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
    }

    function downloadMetrics() {
        const data = metricResponses();
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
                    onChange={onTextChange}
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
                            <Chevron
                                class={
                                    iconRotated()
                                        ? "dropdown-button-chevron rotated"
                                        : "dropdown-button-chevron"
                                }
                            />
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
                                <div title={metric} class="metric">
                                    <h1>{metric}</h1>
                                    <div class="metric-value">{metricResponses()[metric]}</div>
                                </div>
                            ) : (
                                <div title={metric} class="metric">
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
                                            <Info class="info-icon" />
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
