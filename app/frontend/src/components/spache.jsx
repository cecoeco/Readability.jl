import { Show } from "solid-js/web";
import X from "../assets/svg/x.svg";

function Spache(props) {
    const [showSpacheModal, setShowSpacheModal] = props.showSpacheModal;

    function closeSpacheModal() {
        setShowSpacheModal(false);
    }

    return (
        <Show when={showSpacheModal()}>
            <div class="modal-background" onClick={closeSpacheModal}>
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

export default Spache;