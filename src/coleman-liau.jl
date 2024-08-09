"""
    coleman_liau(text::String)

Returns the Coleman-Liau index of `text`.
"""
function coleman_liau(text::String)
    characters_per_100_words::Float64 = characters(text) / words(text) * 100
    sentences_per_100_words::Float64 = sentences(text) / words(text) * 100

    return 0.0588 * characters_per_100_words - 0.296 * sentences_per_100_words - 15.8
end
