import { Show } from "solid-js/web";
import X from "../assets/svg/x.svg";

function Speaking(props) {
    const [showSpeakingModal, setShowSpeakingModal] = props.showSpeakingModal;

    function closeSpeakingModal() {
        setShowSpeakingModal(false);
    }

    return (
        <Show when={showSpeakingModal()}>
            <div class="modal-background" onClick={closeSpeakingModal}>
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

export default Speaking;
