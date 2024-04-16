import { Show } from "solid-js/web";

function Speaking(props: any) {
    const [showSpeakingModal, setShowSpeakingModal] = props.showSpeakingModal;

    function closeSpeakingModal() {
        setShowSpeakingModal(false);
    }

    return (
        <Show when={showSpeakingModal()}>
            <div class="modal-background" onClick={closeSpeakingModal}>
                <div class="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="x" onclick={closeSpeakingModal}>{/* Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>
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
