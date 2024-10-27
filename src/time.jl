"""
    reading_time(text::String; wpm::Number=238)::Float64

Returns the reading time of `text` in seconds.

## Arguments

- `text::String`: The text to analyze.
- `wpm::Number`: The words per minute.

## Returns

- `Float64`: The reading time in seconds.

"""
function reading_time(text::String; wpm::Number=238)::Float64
    seconds::Float64 = words(text) / wpm * 60

    return seconds
end

"""
    speaking_time(text::String; wpm::Number=183)::Float64

Returns the speaking time of `text` in seconds.

## Arguments

- `text::String`: The text to analyze.
- `wpm::Number`: The words per minute.

## Returns

- `Float64`: The speaking time in seconds.

"""
function speaking_time(text::String; wpm::Number=183)::Float64
    seconds::Float64 = words(text) / wpm * 60

    return seconds
end
