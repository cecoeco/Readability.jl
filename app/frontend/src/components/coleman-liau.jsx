import { Show } from "solid-js/web";
function ColemanLiau(props) {
    const [showColemanLiauModal, setShowColemanLiauModal] = props.showColemanLiauModal;

    function closeColemanLiauModal() {
        setShowColemanLiauModal(false);
    }

    return (
        <Show when={showColemanLiauModal()}>
            <div class="modal-background" onClick={closeColemanLiauModal}></div>
        </Show>
    );
}

export default ColemanLiau;