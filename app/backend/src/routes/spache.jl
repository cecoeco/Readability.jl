Oxygen.post("/spache") do req::HTTP.Request
    text = String(req.body)
    metric = Spache(text)
    response = HTTP.Response(200, metric)
    return response
end
