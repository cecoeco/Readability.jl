Oxygen.post("dale-chall") do req::HTTP.Request
    text = String(req.body)
    metric = DaleChall(text)
    response = HTTP.Response(200, metric)
    return response
end
