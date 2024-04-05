import { Show } from "solid-js/web";

function AverageReadingTime(props) {
    const [showAverageReadingTimeModal, setShowAverageReadingTimeModal] = props.showAverageReadingTimeModal;

    function closeAverageReadingTimeModal() {
        setShowAverageReadingTimeModal(false);
    }

    return (
        <Show when={showAverageReadingTimeModal()}>
            <div class="modal-background" onClick={closeAverageReadingTimeModal}>
                
            </div>
        </Show>
    )
}

export default AverageReadingTime;
