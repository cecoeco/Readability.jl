import { Show } from "solid-js/web";

function SMOG(props: any) {
    const [showSMOGModal, setShowSMOGModal] = props.showSMOGModal;

    function closeSMOGModal() {
        setShowSMOGModal(false);
    }

    return (
        <Show when={showSMOGModal()}>
            <div class="modal-background" onClick={closeSMOGModal}>
                <div class="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="x" onclick={closeSMOGModal}>{/* Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>
                    <h1>Simple Measure of Gobbledygook (SMOG)</h1>
                    <p class="math">
                        SMOG Index = 1.0430 * sqrt(total_polysyllablic_words * (30 / total_sentences)) + 3.1291
                    </p>
                    <p class="apa-citation">
                        Mc Laughlin, G. H. (1969). SMOG Grading-a New Readability Formula.{" "}
                        <i>Journal of Reading</i>, 12(8), 639–646.
                    </p>
                </div>
            </div>
        </Show>
    );
}

export default SMOG;
