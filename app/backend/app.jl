using Oxygen, HTTP, Readability

const ALLOWED_ORIGINS::Vector{Pair{String,String}} = [
    "Access-Control-Allow-Origin" => "*"
]

const CORS_HEADERS::Vector{Pair{String,String}} = [
    ALLOWED_ORIGINS...,
    "Access-Control-Allow-Headers" => "*",
    "Access-Control-Allow-Methods" => "GET, POST, OPTIONS"
]

function CorsHandler(handle::Function)
    return function (req::HTTP.Request)
        if HTTP.method(req) == "OPTIONS"
            return HTTP.Response(200, CORS_HEADERS)
        else
            r = handle(req)
            Base.append!(r.headers, ALLOWED_ORIGINS)
            return r
        end
    end
end

function post_request_handler(endpoint::String, readability_function::Function)
    Oxygen.post(endpoint) do req::HTTP.Request
        text::String = Base.String(req.body)
        return readability_function(text)
    end
end

readability_endpoints::Vector{Tuple{String,Function}} = [
    ("/ari", Readability.ARI),
    ("/average_reading_time", Readability.reading_time),
    ("/average_speaking_time", Readability.speaking_time),
    ("/characters", Readability.characters),
    ("/coleman-liau", Readability.ColemanLiau),
    ("/dale-chall", Readability.DaleChall),
    ("/fres", Readability.FleschReadingEase),
    ("/fkgl", Readability.FleschKincaidGradeLevel),
    ("/gunning_fog", Readability.GunningFog),
    ("/sentences", Readability.sentences),
    ("/smog", Readability.SMOG),
    ("/spache", Readability.Spache),
    ("/syllables", Readability.syllables),
    ("/words", Readability.words)
]

for (endpoint, readability_function) in readability_endpoints
    post_request_handler(endpoint, readability_function)
end

Oxygen.serve(host="0.0.0.0", port=5050, middleware=[CorsHandler])