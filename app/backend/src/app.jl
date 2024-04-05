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

post("/ari") do req::HTTP.Request
    text = String(req.body)
    metric = ARI(text)
    return metric
end

post("/average_reading_time") do req::HTTP.Request
    text = String(req.body)
    metric = reading_time(text)
    return metric
end

post("/average_speaking_time") do req::HTTP.Request
    text = String(req.body)
    metric = speaking_time(text)
    return metric
end

post("/characters") do req::HTTP.Request
    text = String(req.body)
    metric = characters(text)
    return metric
end

post("/coleman-liau") do req::HTTP.Request
    text = String(req.body)
    metric = ColemanLiau(text)
    return metric
end

post("/dale-chall") do req::HTTP.Request
    text = String(req.body)
    metric = DaleChall(text)
    return metric
end

post("/fres") do req::HTTP.Request
    text = String(req.body)
    metric = FleschReadingEase(text)
    return metric
end

post("/fkgl") do req::HTTP.Request
    text = String(req.body)
    metric = FleschKincaidGradeLevel(text)
    return metric
end

post("/gunning_fog") do req::HTTP.Request
    text = String(req.body)
    metric = GunningFog(text)
    return metric
end

post("/sentences") do req::HTTP.Request
    text = String(req.body)
    metric = sentences(text)
    return metric
end

post("/smog") do req::HTTP.Request
    text = String(req.body)
    metric = SMOG(text)
    return metric
end

post("/spache") do req::HTTP.Request
    text = String(req.body)
    metric = Spache(text)
    return metric
end

post("/syllables") do req::HTTP.Request
    text = String(req.body)
    metric = syllables(text)
    return metric
end

post("/words") do req::HTTP.Request
    text = String(req.body)
    metric = words(text)
    return metric
end

Oxygen.serve(port=5050, middleware=[CorsHandler])