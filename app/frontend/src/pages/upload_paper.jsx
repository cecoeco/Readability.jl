import "../assets/css/upload_paper.css";
import { createSignal } from "solid-js";
import Cloud from "../assets/svg/cloud.svg";
import X from "../assets/svg/x.svg";

/**
 * Render the upload paper page component.
 *
 * @return {JSX.Element} The rendered upload paper page component
 */
function UploadPaper() {
    const [isDragging, setIsDragging] = createSignal(false);
    const [fileDropped, setFileDropped] = createSignal(false);
    const [fileName, setFileName] = createSignal("");
    const [fileObject, setFileObject] = createSignal(null);

    function handleDragOver(event) {
        event.preventDefault();

        const files = event.dataTransfer.items;
        let containsNonPDF = false;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type !== "application/pdf") {
                containsNonPDF = true;
                break;
            }
        }

        setIsDragging(!containsNonPDF);

        if (containsNonPDF) {
            event.dataTransfer.dropEffect = "none";
        }
    }

    function handleDragLeave(event) {
        event.preventDefault();
        setIsDragging(false);
    }

    function handleDrop(event) {
        event.preventDefault();
        setIsDragging(false);
        setFileDropped(true);
        const files = event.dataTransfer.files;
        console.log("Dropped files:", files);
        if (files.length > 0) {
            setFileName(files[0].name);
        };
        setFileObject(files[0]);
    }

    function handleClick() {
        const fileInput = document.getElementById("upload-paper");
        fileInput.click();
    }

    function handleUpload(event) {
        const files = event.target.files;
        console.log("Uploaded files:", files);
        if (files.length > 0) {
            setFileDropped(true);
            setFileName(files[0].name);
            setFileObject(files[0]);
        }
    }

    function removeFile(event) {
        event.preventDefault();
        setFileDropped(false);
        setFileName("");
        setFileObject(null);
        console.log("File removed");
    }

    function handleSubmit() {
        console.log("Submitted");
    }

    return (
        <div class="upload-container">
            <div
                title="Upload Paper"
                classList={{
                    upload: true,
                    "drag-over": isDragging(),
                    "file-dropped": fileDropped(),
                }}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={handleClick}
            >
                <Cloud class="upload-paper-icon" />
                <label
                    title="Drag and drop or click to upload"
                    class="upload-paper-label"
                    for="upload-paper"
                >
                    {fileDropped() && (
                        <div class="file-details">
                            <a
                                title={fileName()}
                                href={fileObject() && URL.createObjectURL(fileObject())}
                                class="file-name"
                                target="_blank"
                            >
                                {fileName() || "File uploaded!"}
                            </a>
                            <button
                                title="Remove file"
                                class="remove-file-button"
                                onClick={removeFile}
                            >
                                <X class="remove-file-icon" />
                            </button>
                        </div>
                    )}
                    {!fileDropped() &&
                        (isDragging() ? (
                            <p class="drag-message">Drop paper here</p>
                        ) : (
                            <p class="drag-message">
                                Drag and drop or click to upload paper
                            </p>
                        ))}
                    <input
                        class="upload-input"
                        id="upload-paper"
                        name="upload-paper"
                        type="file"
                        accept=".pdf"
                        onChange={handleUpload}
                        disabled={fileDropped()}
                        multiple={false}
                    />
                </label>
            </div>
            <button
                title="upload paper"
                class="upload-button"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
}

export default UploadPaper;
