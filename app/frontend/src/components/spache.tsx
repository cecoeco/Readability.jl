import { Show } from "solid-js/web";

function Spache(props: any) {
    const [showSpacheModal, setShowSpacheModal] = props.showSpacheModal;

    function closeSpacheModal() {
        setShowSpacheModal(false);
    }

    return (
        <Show when={showSpacheModal()}>
            <div class="modal-background" onClick={closeSpacheModal}>
                <div class="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="x" onclick={closeSpacheModal}>{/* Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>
                    <h1>Spache Index</h1>
                    <p class="math">
                        SI = 0.121 * words per sentence + 0.082 * percentage of difficult words + 0.659
                    </p>
                    <p class="apa-citation">
                        Spache, G. (1953). A New Readability Formula for Primary-Grade
                        Reading Materials. <i>The Elementary School Journal</i>, 53(7),
                        410–413.
                        <br />
                        <a href="https://doi.org/10.1086/458513" target="_blank">
                            https://doi.org/10.1086/458513
                        </a>
                    </p>
                </div>
            </div>
        </Show>
    );
}

export default Spache;