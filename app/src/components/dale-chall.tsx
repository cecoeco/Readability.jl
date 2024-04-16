import { Show } from "solid-js";
import X from "../assets/svg/x.svg";

function DC(props) {
    const [showDCModal, setShowDCModal] = props.showDCModal;

    function closeDCModal() {
        setShowDCModal(false);
    }

    return (
        <Show when={showDCModal()}>
            <div class="modal-background" onClick={closeDCModal}>
                <div class="modal">
                    <X class="x" onClick={closeDCModal} />
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