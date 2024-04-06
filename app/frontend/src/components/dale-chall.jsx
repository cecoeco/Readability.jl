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
                    <X class="x" />
                    <h1></h1>
                    <p class="math"></p>
                    <p class="apa-citation"></p>
                </div>
            </div>
        </Show>
    );
}

export default DC;
