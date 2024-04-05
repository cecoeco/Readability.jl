import { Show } from "solid-js/web";

function FKGL(props) {
    const [showFKGLModal, setShowFKGLModal] = props.showFKGLModal;

    function closeFKGLModal() {
        setShowFKGLModal(false);
    }

    return (
        <Show when={showFKGLModal()}>
            <div class="modal-background" onClick={closeFKGLModal}></div>
        </Show>
    )
}

export default FKGL;