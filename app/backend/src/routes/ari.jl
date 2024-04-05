Oxygen.post("/ari") do req::HTTP.Request
    text = String(req.body)
    metric = ARI(text)
    response = HTTP.Response(200, metric)
    return response
end
