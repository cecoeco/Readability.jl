import { Show } from "solid-js/web";
import X from "../assets/svg/x.svg";

function Spache(props) {
    const [showSpacheModal, setShowSpacheModal] = props.showSpacheModal;

    function closeSpacheModal() {
        setShowSpacheModal(false);
    }

    return (
        <Show when={showSpacheModal()}>
            <div class="modal-background" onClick={closeSpacheModal}>
                <div class="modal">
                    <X class="x" onClick={closeSpacheModal} />
                    <h1>Spache Index</h1>
                    <p class="math"></p>
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