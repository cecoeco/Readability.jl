import { Show } from "solid-js/web";

function AverageSpeakingTime(props) {
    const [showAverageSpeakingTimeModal, setShowAverageSpeakingTimeModal] = props.showAverageSpeakingTimeModal;

    function closeAverageSpeakingTimeModal() {
        setShowAverageSpeakingTimeModal(false);
    }

    return (
        <Show when={showAverageSpeakingTimeModal()}>
            <div class="modal-background" onClick={closeAverageSpeakingTimeModal}>
                
            </div>
        </Show>
    )
}

export default AverageSpeakingTime;
