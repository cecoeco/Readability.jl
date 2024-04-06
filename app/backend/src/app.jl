using Oxygen
using HTTP
using Readability

const ALLOWED_ORIGINS::Vector{Pair{String, String}} = [
    "Access-Control-Allow-Origin" => "*"
]

const CORS_HEADERS::Vector{Pair{String,String}} = [
    ALLOWED_ORIGINS...,
    "Access-Control-Allow-Headers" => "*",
    "Access-Control-Allow-Methods" => "GET, Oxygen.post"
]

function CorsHandler(handle)
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

Oxygen.post("/ari") do req::HTTP.Request
    text::String = Base.String(req.body)
    return Readability.ARI(text)
end

Oxygen.post("/average_reading_time") do req::HTTP.Request
    text::String = Base.String(req.body)
    return Readability.reading_time(text)
end

Oxygen.post("/average_speaking_time") do req::HTTP.Request
    text::String = Base.String(req.body)
    return Readability.speaking_time(text)
end

Oxygen.post("/characters") do req::HTTP.Request
    text::String = Base.String(req.body)
    return Readability.characters(text)
end

Oxygen.post("/coleman-liau") do req::HTTP.Request
    text::String = Base.String(req.body)
    return Readability.ColemanLiau(text)
end

Oxygen.post("/dale-chall") do req::HTTP.Request
    text::String = Base.String(req.body)
    return Readability.DaleChall(text)
end

Oxygen.post("/fres") do req::HTTP.Request
    text::String = Base.String(req.body)
    return Readability.FleschReadingEase(text)
end

Oxygen.post("/fkgl") do req::HTTP.Request
    text::String = Base.String(req.body)
    return Readability.FleschKincaidGradeLevel(text)
end

Oxygen.post("/gunning_fog") do req::HTTP.Request
    text::String = Base.String(req.body)
    return Readability.GunningFog(text)
end

Oxygen.post("/sentences") do req::HTTP.Request
    text::String = Base.String(req.body)
    return Readability.sentences(text)
end

Oxygen.post("/smog") do req::HTTP.Request
    text::String = Base.String(req.body)
    return Readability.SMOG(text)
end

Oxygen.post("/spache") do req::HTTP.Request
    text::String = Base.String(req.body)
    return Readability.Spache(text)
end

Oxygen.post("/syllables") do req::HTTP.Request
    text::String = Base.String(req.body)
    return Readability.syllables(text)
end

Oxygen.post("/words") do req::HTTP.Request
    text::String = Base.String(req.body)
    return Readability.words(text)
end

Oxygen.serve(port=5050, middleware=[CorsHandler])
