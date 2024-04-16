import { Show } from "solid-js/web";

function ARI(props: any) {
    const [showARIModal, setShowARIModal] = props.showARIModal;

    function closeARIModal() {
        setShowARIModal(false);
    }

    return (
        <Show when={showARIModal()}>
            <div class="modal-background" onClick={closeARIModal}>
                <div class="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="x" onclick={closeARIModal}>{/* Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>
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
