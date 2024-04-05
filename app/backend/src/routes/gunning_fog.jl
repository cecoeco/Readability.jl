Oxygen.post("/gunning_fog") do req::HTTP.Request
    text = String(req.body)
    metric = GunningFog(text)
    response = HTTP.Response(200, metric)
    return response
end
