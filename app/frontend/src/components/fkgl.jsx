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
            <p class="math"></p>
            <p class="apa-citation">
              Kincaid, J. P., Fishburne, Jr., Robert P., R., Richard L., C., &
              Brad S. (1975). Derivation of New Readability Formulas (Automated
              Readability Index, Fog Count and Flesch Reading Ease Formula) for
              Navy Enlisted Personnel: Defense Technical Information Center.
              https://doi.org/10.21236/ADA006655
            </p>
          </div>
        </div>
      </Show>
    );
}

export default FKGL;
