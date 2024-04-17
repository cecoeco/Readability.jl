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
                    <X class="x" />
                    <h1></h1>
                    <p class="math"></p>
                    <p class="apa-citation"></p>
                </div>
            </div>
        </Show>
    );
}

export default GF;