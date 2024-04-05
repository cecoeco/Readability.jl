Oxygen.post("/flesch_reading_ease") do req::HTTP.Request
    text = String(req.body)
    metric = FleschReadingEase(text)
    response = HTTP.Response(200, metric)
    return response
end
