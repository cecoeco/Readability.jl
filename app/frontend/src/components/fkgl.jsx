import { Show } from "solid-js/web";
import X from "../assets/svg/x.svg";

function FKGL(props) {
    const [showFKGLModal, setShowFKGLModal] = props.showFKGLModal;

    function closeFKGLModal() {
        setShowFKGLModal(false);
    }

    return (
        <Show when={showFKGLModal()}>
            <div class="modal-background" onClick={closeFKGLModal}>
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

export default FKGL;
