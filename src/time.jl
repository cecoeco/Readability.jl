"""
    reading_time(text::String; wpm::Number=238)

Returns the reading time of `text` in seconds.
"""
function reading_time(text::String; wpm::Number=238)
    seconds::Float64 = words(text) / wpm * 60
    return seconds
end

"""
    speaking_time(text::String; wpm::Number=183)

Returns the speaking time of `text` in seconds.
"""
function speaking_time(text::String; wpm::Number=183)
    seconds::Float64 = words(text) / wpm * 60
    return seconds
end
