import { Show } from "solid-js/web";
import X from "../assets/svg/x.svg";

function FRES(props) {
    const [showFRESModal, setShowFRESModal] =
        props.showFRESModal;

    function closeFRESModal() {
        setShowFRESModal(false);
    }

    return (
        <Show when={showFRESModal()}>
            <div class="modal-background" onClick={closeFRESModal}>
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

export default FRES;
