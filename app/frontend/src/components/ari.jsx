import { Show } from "solid-js/web";
import X from "../assets/svg/x.svg";

function ARI(props) {
    const [showARIModal, setShowARIModal] = props.showARIModal;

    function closeARIModal() {
        setShowARIModal(false);
    }

    return (
        <Show when={showARIModal()}>
            <div class="modal-background" onClick={closeARIModal}>
                <div class="modal">
                    <X class="x" onClick={closeARIModal} />
                    <h1>Automated Readability Index</h1>
                    <p class="math">
                        ARI = 4.71 * characters per word + 0.5 * words per sentence -
                        21.43
                    </p>
                    <p class="apa-citation">
                        Smith, E. A., &amp; Senter, R. J. (1967). Automated readability
                        index.{" "}
                        <i>AMRL-TR. Aerospace Medical Research Laboratories (U.S.)</i>,
                        1–14.
                        <br />
                        <a
                            title="http://www.dtic.mil/cgi-bin/GetTRDoc?AD=AD0667273"
                            href="https://web.archive.org/web/20130408131249/http://www.dtic.mil/cgi-bin/GetTRDoc?AD=AD0667273"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            http://www.dtic.mil/cgi-bin/GetTRDoc?AD=AD0667273
                        </a>
                    </p>
                </div>
            </div>
        </Show>
    );
}

export default ARI;
