oxygen.post("/sentence-count") do req::HTTP.Request
    text = String(req.body)
    metric = sentence_count(text)
    response = HTTP.Response(200, metric)
    return response
end
