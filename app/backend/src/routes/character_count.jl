Oxygen.post("/character-count") do req::HTTP.Request
    text = String(req.body)
    metric = character_count(text)
    response = HTTP.Response(200, metric)
    return response
end
