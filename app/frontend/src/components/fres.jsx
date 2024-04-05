import { Show } from "solid-js/web";

function FRES(props) {
    const [showFRESModal, setShowFRESModal] =
        props.showFRESModal;

    function closeFRESModal() {
        setShowFRESModal(false);
    }

    return (
        <Show when={showFRESModal()}>
            <div class="modal-background" onClick={closeFRESModal}></div>
        </Show>
    );
}

export default FRES;
