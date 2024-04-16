import { Show } from "solid-js/web";
import X from "../assets/svg/x.svg";

function Speaking(props) {
    const [showSpeakingModal, setShowSpeakingModal] = props.showSpeakingModal;

    function closeSpeakingModal() {
        setShowSpeakingModal(false);
    }

    return (
        <Show when={showSpeakingModal()}>
            <div class="modal-background" onClick={closeSpeakingModal}>
                <div class="modal">
                    <X class="x" onClick={closeSpeakingModal} />
                    <h1>Average Speaking Time</h1>
                    <p class="math">seconds = total words / 183 words per minute * 60</p>
                    <p class="apa-citation">
                        Brysbaert, M. (2019). How many words do we read per minute? A
                        review and meta-analysis of reading rate.{" "}
                        <i>Journal of Memory and Language</i>, 109, 104047.
                        <br />
                        <a
                            href="https://doi.org/10.1016/j.jml.2019.104047"
                            target="_blank"
                        >
                            https://doi.org/10.1016/j.jml.2019.104047
                        </a>
                    </p>
                </div>
            </div>
        </Show>
    );
}

export default Speaking;
