import { Show } from "solid-js";

function DaleChall(props) {
    const [showDaleChallModal, setShowDaleChallModal] = props.showDaleChallModal;

    function closeDaleChallModal() {
        setShowDaleChallModal(false);
    }

    return (
        <Show when={showDaleChallModal()}>
            <div class="modal-background" onClick={closeDaleChallModal}></div>
        </Show>
    );
}

export default DaleChall;
