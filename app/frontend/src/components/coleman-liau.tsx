import { Show } from "solid-js/web";

function CL(props: any) {
    const [showCLModal, setShowCLModal] = props.showCLModal;

    function closeCLModal() {
        setShowCLModal(false);
    }

    return (
        <Show when={showCLModal()}>
            <div class="modal-background" onClick={closeCLModal}>
                <div class="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="x" onclick={closeCLModal}>{/* Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>
                    <h1>Coleman-Liau Index</h1>
                    <p class="math">CLI = 0.0588 * characters per 100 words - 0.296 * sentences per 100 words - 15.8</p>
                    <p class="apa-citation">
                        Coleman, M., & Liau, T. L. (1975). A computer readability formula
                        designed for machine scoring. <i>Journal of Applied Psychology</i>, 60(2),
                        283–284.
                        <br />
                        <a href="https://doi.org/10.1037/h0076540" target="_blank">
                            https://doi.org/10.1037/h0076540
                        </a>
                    </p>
                </div>
            </div>
        </Show>
    );
}

export default CL;
