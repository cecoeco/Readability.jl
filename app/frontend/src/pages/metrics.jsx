import "../assets/css/metrics.css";
import "../assets/css/modal.css";
import { createSignal, createEffect } from "solid-js";
import Chevron from "../assets/svg/chevron.svg";
import Info from "../assets/svg/info.svg";
import ARI from "../components/ari.jsx";
import ColemanLiau from "../components/coleman-liau.jsx";
import DaleChall from "../components/dale-chall.jsx";
import FleschReadingEase from "../components/flesch.jsx";
import FleschKincaidGradeLevel from "../components/flesch-kincaid.jsx";
import GunningFog from "../components/gunning_fog.jsx";
import SMOG from "../components/smog.jsx";
import Spache from "../components/spache.jsx";

function Metrics() {
    const [isDropdownOpen, setIsDropdownOpen] = createSignal(false);
    const [iconRotated, setIconRotated] = createSignal(false);
    const [selectedMetrics, setSelectedMetrics] = createSignal(new Set([
        "Automatic Readability Index (ARI)",
        "Average Reading Time",
        "Average Speaking Time",
        "Character Count",
        "Coleman-Liau",
        "Dale-Chall",
        "Flesch Reading Ease Score",
        "Flesch-Kincaid Grade Level",
        "Gunning Fog",
        "Sentence Count",
        "Simple Measure of Gobbledygook (SMOG)",
        "Spache",
        "Syllable Count",
        "Word Count"
    ]));

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
            "Character Count",
            "Coleman-Liau",
            "Dale-Chall",
            "Flesch Reading Ease Score",
            "Flesch-Kincaid Grade Level",
            "Gunning Fog",
            "Sentence Count",
            "Simple Measure of Gobbledygook (SMOG)",
            "Spache",
            "Syllable Count",
            "Word Count"
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

    const [showColemanLiau, setShowColemanLiau] = createSignal(false);
    function openColemanLiauModal() {
        setShowColemanLiau(true);
    }

    const [showDaleChall, setShowDaleChall] = createSignal(false);
    function openDaleChallModal() {
        setShowDaleChall(true);
    }

    const [showFlesch, setShowFlesch] = createSignal(false);
    function openFleschReadingEaseModal() {
        setShowFlesch(true);
    }

    const [showFleschKincaid, setShowFleschKincaid] = createSignal(false);
    function openFleschKincaidGradeLevelModal() {
        setShowFleschKincaid(true);
    }

    const [showGunningFog, setShowGunningFog] = createSignal(false);
    function openGunningFogModal() {
        setShowGunningFog(true);
    }

    const [showSMOG, setShowSMOG] = createSignal(false);
    function openSMOGModal() {
        setShowSMOG(true);
    }

    const [showSpache, setShowSpache] = createSignal(false);
    function openSpacheModal() {
        setShowSpache(true);
    }

    function downloadMetrics() {
        // Logic to handle downloading metrics
    }

    return (
        <>
            <ARI
                showARIModal={[showARI, setShowARI]}
            />
            <ColemanLiau
                showColemanLiauModal={[showColemanLiau, setShowColemanLiau]}
            />
            <DaleChall
                showDaleChallModal={[showDaleChall, setShowDaleChall]}
            />
            <FleschReadingEase
                showFleschReadingEaseModal={[showFlesch, setShowFlesch]}
            />
            <FleschKincaidGradeLevel
                showFleschKincaidGradeLevelModal={[showFleschKincaid, setShowFleschKincaid]}
            />
            <GunningFog
                showGunningFogModal={[showGunningFog, setShowGunningFog]}
            />
            <SMOG
                showSMOGModal={[showSMOG, setShowSMOG]}
            />
            <Spache
                showSpacheModal={[showSpache, setShowSpache]}
            />
            <div class="metrics-page">
                <div class="textarea-container">
                    <textarea name="text" placeholder="Type here..." />
                </div>
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
                        <div
                            class={`dropdown-content ${isDropdownOpen() ? "open" : ""}`}
                        >
                            <label>
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
                                "Character Count",
                                "Coleman-Liau",
                                "Dale-Chall",
                                "Flesch Reading Ease Score",
                                "Flesch-Kincaid Grade Level",
                                "Gunning Fog",
                                "Sentence Count",
                                "Simple Measure of Gobbledygook (SMOG)",
                                "Spache",
                                "Syllable Count",
                                "Word Count",
                            ].map((metric) => (
                                <label>
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
                    {Array.from(selectedMetrics()).map((metric) =>
                        (
                            metric === "Average Reading Time" ||
                            metric === "Average Speaking Time" ||
                            metric === "Character Count" ||
                            metric === "Sentence Count" ||
                            metric === "Syllable Count" ||
                            metric === "Word Count"
                        ) ? (
                            <h3 class="metrics-h3">{metric}</h3>
                        ) : (
                            <h3 class="metrics-h3">
                                <span>{metric}</span>
                                <button class="info-button" onClick={() => {
                                    switch (metric) {
                                        case "Automatic Readability Index (ARI)":
                                            openARIModal();
                                            break;
                                        case "Coleman-Liau":
                                            openColemanLiauModal();
                                            break;
                                        case "Dale-Chall":
                                            openDaleChallModal();
                                            break;
                                        case "Flesch Reading Ease Score":
                                            openFleschReadingEaseModal();
                                            break;
                                        case "Flesch-Kincaid Grade Level":
                                            openFleschKincaidGradeLevelModal();
                                            break;
                                        case "Gunning Fog":
                                            openGunningFogModal();
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
                                }}>
                                    <Info class="info-icon" />
                                </button>
                            </h3>
                        )
                    )}
                    <button
                        title="Download Metrics"
                        type="button"
                        onClick={downloadMetrics}
                    >
                        Download Metrics
                    </button>
                </div>
            </div>
        </>
    );
}

export default Metrics;
