"""
    reading_time(text::String; wpm::Number=238)

Returns the reading time of `text` in seconds.
"""
function reading_time(text::String; wpm::Number=238)
    total_words::Int = words(text)
    seconds::Float64 = total_words / wpm * 60
    return seconds
end

"""
    speaking_time(text::String; wpm::Number=183)

Returns the speaking time of `text` in seconds.
"""
function speaking_time(text::String; wpm::Number=183)
    total_words::Int = words(text)
    seconds::Float64 = total_words / wpm * 60
    return seconds
end
