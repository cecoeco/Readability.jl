Oxygen.post("/word_count") do req::HTTP.Request
    text = String(req.body)
    metric = word_count(text)
    response = HTTP.Response(200, metric)
    return response
end
