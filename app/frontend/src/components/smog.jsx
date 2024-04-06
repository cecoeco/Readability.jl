import { Show } from "solid-js/web";
import X from "../assets/svg/x.svg";

function SMOG(props) {
    const [showSMOGModal, setShowSMOGModal] = props.showSMOGModal;

    function closeSMOGModal() {
        setShowSMOGModal(false);
    }

    return (
        <Show when={showSMOGModal()}>
            <div class="modal-background" onClick={closeSMOGModal}>
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

export default SMOG;
