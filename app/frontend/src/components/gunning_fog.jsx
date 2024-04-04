import { Show } from "solid-js/web";

function GunningFog(props) {
    const [showGunningFogModal, setShowGunningFogModal] = props.showGunningFogModal;

    function closeGunningFogModal() {
        setShowGunningFogModal(false);
    }

    return (
        <Show when={showGunningFogModal()}>
            <div class="modal-background" onClick={closeGunningFogModal}></div>
        </Show>
    )
}

export default GunningFog;