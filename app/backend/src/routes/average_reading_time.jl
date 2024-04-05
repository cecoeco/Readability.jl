Oxygen.post("/average-reading-time") do req::HTTP.Request
    text = String(req.body)
    metric = reading_time(text)
    response = HTTP.Response(200, metric)
    return response
end
