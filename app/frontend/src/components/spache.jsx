import { Show } from "solid-js/web";

function Spache(props) {
    const [showSpacheModal, setShowSpacheModal] = props.showSpacheModal;

    function closeSpacheModal() {
        setShowSpacheModal(false);
    }

    return (
        <Show when={showSpacheModal()}>
            <div class="modal-background" onClick={closeSpacheModal}></div>
        </Show>
    )
}

export default Spache;