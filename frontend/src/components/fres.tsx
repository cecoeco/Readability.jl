import { Show } from "solid-js/web";

function FRES(props: any) {
    const [showFRESModal, setShowFRESModal] =
        props.showFRESModal;

    function closeFRESModal() {
        setShowFRESModal(false);
    }

    return (
        <Show when={showFRESModal()}>
            <div class="modal-background" onClick={closeFRESModal}>
                <div class="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="x" onclick={closeFRESModal}>{/* Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>
                    <h1>Fresch Reading Ease Score</h1>
                    <p class="math">
                        FRES = 206.835 - 1.015 * words per sentence - 84.6 * syllables per word
                    </p>
                    <p class="apa-citation">
                        Farr, J. N., Jenkins, J. J., & Paterson, D. G. (1951).
                        Simplification of Flesch Reading Ease Formula. <i>Journal of Applied
                            Psychology</i>, 35(5), 333–337.
                        <br />
                        <a href="https://doi.org/10.1037/h0062427" target="_blank">
                            https://doi.org/10.1037/h0062427
                        </a>
                    </p>
                </div>
            </div>
        </Show>
    );
}

export default FRES;
