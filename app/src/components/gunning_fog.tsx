import { Show } from "solid-js/web";

function GF(props: any) {
    const [showGFModal, setShowGFModal] = props.showGFModal;

    function closeGFModal() {
        setShowGFModal(false);
    }

    return (
        <Show when={showGFModal()}>
            <div class="modal-background" onClick={closeGFModal}>
                <div class="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="x" onclick={closeGFModal}>{/* Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>
                    <h1>Gunning Fog Index</h1>
                    <p class="math">
                        GFI = 0.4 * words per sentence + percentage of complex words
                    </p>
                    <p class="apa-citation">
                        Gunning, R. (1971). The Technique of Clear Writing. McGraw-Hill.
                    </p>
                </div>
            </div>
        </Show>
    );
}

export default GF;