"""
    dale_chall(text::String)

Returns the Dale-Chall readability score of `text`.
"""
function dale_chall(text::String)
    percentage_of_difficult_words::Float64 = 100 * difficult_words(text, "dale-chall") / words(text)

    return 64 - 0.95 * percentage_of_difficult_words - 0.69 * words_per_sentence(text)
end
