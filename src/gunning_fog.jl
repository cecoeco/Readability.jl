"""
    gunning_fog(text::String)

Returns the Gunning Fog index of `text`.
"""
function gunning_fog(text::String)
    percentage_of_complex_words::Float64 = 100 * complex_words(text) / words(text)

    return 0.4 * (words_per_sentence(text) + percentage_of_complex_words)
end
