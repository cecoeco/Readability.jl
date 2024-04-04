import { Show } from "solid-js/web";

function ARI(props) {
    const [showARIModal, setShowARIModal] = props.showARIModal;

    function closeARIModal() {
        setShowARIModal(false);
    }

    return (
        <Show when={showARIModal()}>
            <div class="modal-background" onClick={closeARIModal}>
                
            </div>
        </Show>
    )
}

export default ARI;
