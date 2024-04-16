import { Show } from "solid-js";

function DC(props: any) {
    const [showDCModal, setShowDCModal] = props.showDCModal;

    function closeDCModal() {
        setShowDCModal(false);
    }

    return (
        <Show when={showDCModal()}>
            <div class="modal-background" onClick={closeDCModal}>
                <div class="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="x" onclick={closeDCModal}>{/* Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>
                    <h1>Dale-Chall Index</h1>
                    <p class="math">
                        DCI = 64 - 0.95 * percentage of difficult words - 0.69 * words per sentence
                    </p>
                    <p class="apa-citation">
                        Dale, E., & Chall, J. S. (1948). A Formula for Predicting
                        Readability. <i>Educational Research Bulletin</i>, 27(1), 11–28.
                    </p>
                </div>
            </div>
        </Show>
    );
}

export default DC;
