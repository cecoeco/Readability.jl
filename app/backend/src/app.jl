using Oxygen
using HTTP
using Readability

const ALLOWED_ORIGINS = ["Access-Control-Allow-Origin" => "*"]

const CORS_HEADERS = [
    ALLOWED_ORIGINS...,
    "Access-Control-Allow-Headers" => "*",
    "Access-Control-Allow-Methods" => "GET, POST"
]

function CorsHandler(handle)
    return function (req::HTTP.Request)
        if HTTP.method(req) == "OPTIONS"
            return HTTP.Response(200, CORS_HEADERS)
        else
            r = handle(req)
            append!(r.headers, ALLOWED_ORIGINS)
            return r
        end
    end
end

## Routes
include("routes/ari.jl")
include("routes/average_reading_time.jl")
include("routes/average_speaking_time.jl")
include("routes/character_count.jl")
include("routes/coleman-liau.jl")
include("routes/dale-chall.jl")
include("routes/flesch_reading_ease.jl")
include("routes/flesch-kincaid_grade_level.jl")
include("routes/gunning_fog.jl")
include("routes/sentence_count.jl")
include("routes/smog.jl")
include("routes/spache.jl")
include("routes/syllable_count.jl")
include("routes/word_count.jl")

Oxygen.serve(port=5050, middleware=[CorsHandler])