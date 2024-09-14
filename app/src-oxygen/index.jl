module ReadabilityApp

using HTTP, NodeJS, Oxygen, Readability

const DIRECTORY::String = Base.Filesystem.dirname(Base.@__DIR__)

const BUILD_DIRECTORY::String = Base.Filesystem.joinpath(DIRECTORY, "build")

function build_reactjs(; build_directory::String)::Nothing
    if Base.Filesystem.basename(Base.Filesystem.pwd()) != "app"
        Base.CoreLogging.@info "Changing app directory..."
        Base.Filesystem.cd("app")
    end

    if Base.Filesystem.isdir(build_directory)
        Base.CoreLogging.@info "Removing existing build directory..."
        Base.Filesystem.rm(build_directory; force=true, recursive=true)
    end

    Base.CoreLogging.@info "Building frontend..."

    Base.run(`$(NodeJS.npm_cmd()) install`)
    Base.run(`$(NodeJS.npm_cmd()) run build`)

    Base.CoreLogging.@info "Finished building frontend"

    return nothing
end

function serve_reactjs(; build_directory::String)::Nothing
    Base.Filesystem.write(
        Base.Filesystem.joinpath(build_directory, "index.html"),
        """
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Readability.jl</title>
            <meta name="description" content="readability statistics">
            <meta name="keywords" content="readability">
            <meta name="author" content="Ceco Elijah Maples and Readability.jl Contributors">
            <link rel="icon" type="image/png" href="/favicon.png">
            <link rel="stylesheet" type="text/css" href="/index.css">
            <script defer src="/index.js"></script>
        </head>
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root"></div>
        </body>
        </html>
        """
    )

    for path in Base.Filesystem.readdir(build_directory; join=true)
        filename::String = Base.Filesystem.basename(path)
        if filename == "index.html"
            Oxygen.get("/") do
                Oxygen.file(path)
            end
        else
            Oxygen.get("/$filename") do
                Oxygen.file(path)
            end
        end
    end

    return nothing
end

function start_app()::Nothing
    build_reactjs(; build_directory=BUILD_DIRECTORY)
    serve_reactjs(; build_directory=BUILD_DIRECTORY)

    Oxygen.serve(
        host="0.0.0.0",
        port=5050,
        docs=false,
        metrics=false
    )

    return nothing
end

function post_request_handler(endpoint::String, readability_function::Function)
    Oxygen.post(endpoint) do req::HTTP.Request
        return readability_function(Base.String(req.body))
    end
end

readability_endpoints::Vector{Tuple{String,Function}} = [
    (
        "/api/ari",
        Readability.ari
    ),
    (
        "/api/characters",
        Readability.characters
    ),
    (
        "/api/characters-per-word",
        Readability.characters_per_word
    ),
    (
        "/api/coleman-liau",
        Readability.coleman_liau
    ),
    (
        "/api/dale-chall",
        Readability.dale_chall
    ),
    (
        "/api/flesch-kincaid-grade-level",
        Readability.flesch_kincaid_grade_level
    ),
    (
        "/api/flesch-reading-ease-score",
        Readability.flesch_reading_ease
    ),
    (
        "/api/gunning-fog",
        Readability.gunning_fog
    ),
    (
        "/api/lines",
        Readability.lines
    ),
    (
        "/api/paragraphs",
        Readability.paragraphs
    ),
    (
        "/api/reading-time",
        Readability.reading_time
    ),
    (
        "/api/sentences",
        Readability.sentences
    ),
    (
        "/api/sentences-per-paragraph",
        Readability.sentences_per_paragraph
    ),
    (
        "/api/smog",
        Readability.smog
    ),
    (
        "/api/spache",
        Readability.spache
    ),
    (
        "/api/speaking-time",
        Readability.speaking_time
    ),
    (
        "/api/syllables",
        Readability.syllables
    ),
    (
        "/api/syllables-per-word",
        Readability.syllables_per_word
    ),
    (
        "/api/words",
        Readability.words
    ),
    (
        "/api/words-per-sentence",
        Readability.words_per_sentence
    )
]

for (endpoint, readability_function) in readability_endpoints
    post_request_handler(endpoint, readability_function)
end

start_app()

end
