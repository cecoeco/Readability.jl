import { Show } from "solid-js/web";

function FleschKincaidGradeLevel(props) {
    const [showFleschKincaidGradeLevelModal, setShowFleschKincaidGradeLevelModal] = props.showFleschKincaidGradeLevelModal;

    function closeFleschKincaidGradeLevelModal() {
        setShowFleschKincaidGradeLevelModal(false);
    }

    return (
        <Show when={showFleschKincaidGradeLevelModal()}>
            <div class="modal-background" onClick={closeFleschKincaidGradeLevelModal}></div>
        </Show>
    )
}

export default FleschKincaidGradeLevel;