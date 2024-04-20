"""
    Spache(text::String)

Returns the Spache readability score of `text`.
"""
function Spache(text::String)
    percentage_of_difficult_words::Float64 = 100 * difficult_words(text, "spache") / words(text)

    return 0.121 * words_per_sentence(text) + 0.082 * percentage_of_difficult_words + 0.659
end
