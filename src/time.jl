function reading_time(text::String, wpm::Number=200)
    word_count::Int = length(split(text))
    minutes::Float64 = word_count / wpm
    return minutes
end

function speaking_time(text::String, wpm::Number=150)
    word_count::Int = length(split(text))
    minutes::Float64 = word_count / wpm
    return minutes
end

function times(text::String, wpm_reading::Number=200, wpm_speaking::Number=150)
    reading::Float64 = reading_time(text, wpm_reading)
    speaking::Float64 = speaking_time(text, wpm_speaking)
    minutes::Vector{String} = [
        "Reading time: $reading" * " minutes", 
        "Speaking time: $speaking" * " minutes"
    ]
    return minutes
end