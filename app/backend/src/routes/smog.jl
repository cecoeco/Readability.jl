Oxygen.post("/smog") do req::HTTP.Request
    text = String(req.body)
    metric = SMOG(text)
    response = HTTP.Response(200, metric)
    return response
end
