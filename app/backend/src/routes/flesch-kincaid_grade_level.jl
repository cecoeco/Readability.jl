Oxygen.post("/flesch-kincaid_grade_level") do req::HTTP.Request
    text = String(req.body)
    metric = FleschKincaidGradeLevel(text)
    response = HTTP.Response(200, metric)
    return response
end
