function reading_time(text::String; wpm::Number=200)
    total_words::Int = words(text)
    seconds::Float64 = total_words / wpm * 60
    return seconds
end

function speaking_time(text::String; wpm::Number=150)
    total_words::Int = words(text)
    seconds::Float64 = total_words / wpm * 60
    return seconds
end
