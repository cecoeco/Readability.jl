import { Show } from "solid-js/web";

function FKGL(props: any) {
    const [showFKGLModal, setShowFKGLModal] = props.showFKGLModal;

    function closeFKGLModal() {
        setShowFKGLModal(false);
    }

    return (
        <Show when={showFKGLModal()}>
            <div class="modal-background" onClick={closeFKGLModal}>
                <div class="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="x" onclick={closeFKGLModal}>{/* Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>
                    <h1>Flesch-Kincaid Grade Level</h1>
                    <p class="math">
                        FKGL = 0.39 * words per sentence + 11.8 * syllables per word - 15.59
                    </p>
                    <p class="apa-citation">
                        Kincaid, J. P., Fishburne, Jr., Robert P., R., Richard L., C., &
                        Brad S. (1975). Derivation of New Readability Formulas (Automated
                        Readability Index, Fog Count and Flesch Reading Ease Formula) for
                        Navy Enlisted Personnel: Defense Technical Information Center.
                        <br />
                        <a href="https://doi.org/10.21236/ADA006655" target="_blank">
                            https://doi.org/10.21236/ADA006655
                        </a>
                    </p>
                </div>
            </div>
        </Show>
    );
}

export default FKGL;
