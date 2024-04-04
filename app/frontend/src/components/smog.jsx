import { Show } from "solid-js/web";

function SMOG(props) {
    const [showSMOGModal, setShowSMOGModal] = props.showSMOGModal;

    function closeSMOGModal() {
        setShowSMOGModal(false);
    }

    return (
        <Show when={showSMOGModal()}>
            <div class="modal-background" onClick={closeSMOGModal}></div>
        </Show>
    )
}

export default SMOG;
