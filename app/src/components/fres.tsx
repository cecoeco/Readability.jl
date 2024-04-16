import { Show } from "solid-js/web";
import X from "../assets/svg/x.svg";

function FRES(props) {
    const [showFRESModal, setShowFRESModal] =
        props.showFRESModal;

    function closeFRESModal() {
        setShowFRESModal(false);
    }

    return (
        <Show when={showFRESModal()}>
            <div class="modal-background" onClick={closeFRESModal}>
                <div class="modal">
                    <X class="x" onClick={closeFRESModal} />
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
