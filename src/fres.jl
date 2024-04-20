"""
    FleschReadingEase(text::String)

Returns the Flesch Reading Ease Score of `text`.
"""
function FleschReadingEase(text::String)::Float64
    return 206.835 - 1.015 * words_per_sentence(text) - 84.6 * syllables_per_word(text)
end
