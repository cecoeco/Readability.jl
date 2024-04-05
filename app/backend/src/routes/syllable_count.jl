Oxygen.post("/syllable_count") do req::HTTP.Request
    text = String(req.body)
    metric = syllable_count(text)
    response = HTTP.Response(200, metric)
    return response
end
