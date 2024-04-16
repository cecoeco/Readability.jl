import { Show } from "solid-js/web";
import X from "../assets/svg/x.svg";

function FKGL(props) {
    const [showFKGLModal, setShowFKGLModal] = props.showFKGLModal;

    function closeFKGLModal() {
        setShowFKGLModal(false);
    }

    return (
        <Show when={showFKGLModal()}>
            <div class="modal-background" onClick={closeFKGLModal}>
                <div class="modal">
                    <X class="x" onClick={closeFKGLModal} />
                    <h1>Flesch-Kincaid Grade Level</h1>
                    <p class="math">
                        FKGL = 0.39 * words per sentence + 11.8 * syllables per word - 15.59
                    </p>
                    <p class="apa-citation">
                        Kincaid, J. P., Fishburne, Jr., Robert P., R., Richard L., C., &
                        Brad S. (1975). Derivation of New Readability Formulas (Automated
                        Readability Index, Fog Count and Flesch Reading Ease Formula) for
                        Navy Enlisted Personnel: Defense Technical Information Center.
                        <br/>
                        <a href="https://doi.org/10.21236/ADA006655" target="_blank">
                            https://doi.org/10.21236/ADA006655
                        </a>
                    </p>
                </div>
            </div>
        </Show>
    );
}

export default FKGL;
