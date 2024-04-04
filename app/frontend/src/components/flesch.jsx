import { Show } from "solid-js/web";

function FleschReadingEase(props) {
    const [showFleschReadingEaseModal, setShowFleschReadingEaseModal] =
        props.showFleschReadingEaseModal;

    function closeFleschReadingEaseModal() {
        setShowFleschReadingEaseModal(false);
    }

    return (
        <Show when={showFleschReadingEaseModal()}>
            <div class="modal-background" onClick={closeFleschReadingEaseModal}></div>
        </Show>
    );
}

export default FleschReadingEase;
