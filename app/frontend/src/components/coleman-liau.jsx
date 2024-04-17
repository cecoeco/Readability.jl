import { Show } from "solid-js/web";
import X from "../assets/svg/x.svg";

function CL(props) {
    const [showCLModal, setShowCLModal] = props.showCLModal;

    function closeCLModal() {
        setShowCLModal(false);
    }

    return (
        <Show when={showCLModal()}>
            <div class="modal-background" onClick={closeCLModal}>
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

export default CL;
