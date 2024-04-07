import { Show } from "solid-js/web";
import X from "../assets/svg/x.svg";

function CL(props) {
    const [showCLModal, setShowCLModal] = props.showCLModal;

    function closeCLModal() {
        setShowCLModal(false);
    }

    return (
        <Show when={showCLModal()}>
            <div class="modal-background" onClick={closeCLModal}>
                <div class="modal">
                    <X class="x" onClick={closeCLModal} />
                    <h1>Coleman-Liau Index</h1>
                    <p class="math">CLI = 0.0588 * L - 0.296 * S - 15.8</p>
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
