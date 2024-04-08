"""
    Spache(text::String)

Returns the Spache readability score of `text`.
"""
function Spache(text::String)
    total_words::Int = words(text)
    total_difficult_words::Int = difficult_words(text, "spache")
    total_sentences::Int = sentences(text)

    percentage_of_difficult_words::Float64 = 100 * total_difficult_words / total_words
    words_per_sentence::Float64 = total_words / total_sentences

    spache_score::Float64 = 0.121 * words_per_sentence + 0.082 * percentage_of_difficult_words + 0.659
    return spache_score
end
