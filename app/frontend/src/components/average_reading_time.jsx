import { Show } from "solid-js/web";
import X from "../assets/svg/x.svg";

function Reading(props) {
    const [showReadingModal, setShowReadingModal] = props.showReadingModal;

    function closeReadingModal() {
        setShowReadingModal(false);
    }

    return (
        <Show when={showReadingModal()}>
            <div class="modal-background" onClick={closeReadingModal}>
                <div class="modal">
                    <X class="x" onClick={closeReadingModal} />
                    <h1></h1>
                    <p class="math"></p>
                    <p class="apa-citation"></p>
                </div>
            </div>
        </Show>
    )
}

export default Reading;
