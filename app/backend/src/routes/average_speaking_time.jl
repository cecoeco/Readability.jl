Oxygen.post("/average-speaking-time") do req::HTTP.Request
    text = String(req.body)
    metric = speaking_time(text)
    response = HTTP.Response(200, metric)
    return response
end
