import { Show } from "solid-js/web";
import X from "../assets/svg/x.svg";

function GF(props) {
    const [showGFModal, setShowGFModal] = props.showGFModal;

    function closeGFModal() {
        setShowGFModal(false);
    }

    return (
        <Show when={showGFModal()}>
            <div class="modal-background" onClick={closeGFModal}>
                <div class="modal">
                    <X class="x" onClick={closeGFModal} />
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