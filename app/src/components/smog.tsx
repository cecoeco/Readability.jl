import { Show } from "solid-js/web";
import X from "../assets/svg/x.svg";

function SMOG(props) {
    const [showSMOGModal, setShowSMOGModal] = props.showSMOGModal;

    function closeSMOGModal() {
        setShowSMOGModal(false);
    }

    return (
        <Show when={showSMOGModal()}>
            <div class="modal-background" onClick={closeSMOGModal}>
                <div class="modal">
                    <X class="x" onClick={closeSMOGModal} />
                    <h1>Simple Measure of Gobbledygook (SMOG)</h1>
                    <p class="math">
                        SMOG Index = 1.0430 * sqrt(total_polysyllablic_words * (30 / total_sentences)) + 3.1291
                    </p>
                    <p class="apa-citation">
                        Mc Laughlin, G. H. (1969). SMOG Grading-a New Readability Formula.{" "}
                        <i>Journal of Reading</i>, 12(8), 639–646.
                    </p>
                </div>
            </div>
        </Show>
    );
}

export default SMOG;
