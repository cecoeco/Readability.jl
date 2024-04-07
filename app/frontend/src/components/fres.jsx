import { Show } from "solid-js/web";
import X from "../assets/svg/x.svg";

function FRES(props) {
    const [showFRESModal, setShowFRESModal] =
        props.showFRESModal;

    function closeFRESModal() {
        setShowFRESModal(false);
    }

    return (
      <Show when={showFRESModal()}>
        <div class="modal-background" onClick={closeFRESModal}>
          <div class="modal">
            <X class="x" onClick={closeFRESModal} />
            <h1>Fresch Reading Ease Score</h1>
            <p class="math"></p>
            <p class="apa-citation">
              Farr, J. N., Jenkins, J. J., & Paterson, D. G. (1951).
              Simplification of Flesch Reading Ease Formula. Journal of Applied
              Psychology, 35(5), 333–337. https://doi.org/10.1037/h0062427
            </p>
          </div>
        </div>
      </Show>
    );
}

export default FRES;
