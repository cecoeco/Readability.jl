Oxygen.post("/coleman-liau") do req::HTTP.Request
    text = String(req.body)
    metric = ColemanLiau(text)
    response = HTTP.Response(200, metric)
    return response
end
