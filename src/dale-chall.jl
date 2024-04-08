"""
    DaleChall(text::String)

Returns the Dale-Chall readability score of `text`.
"""
function DaleChall(text::String)
    total_words::Int = words(text)
    total_difficult_words::Int = difficult_words(text, "dale-chall")
    total_sentences::Int = sentences(text)

    percentage_of_difficult_words::Float64 = 100 * total_difficult_words / total_words
    words_per_sentence::Float64 = total_words / total_sentences

    dale_chall_score::Float64 = 64 - 0.95 * percentage_of_difficult_words - 0.69 * words_per_sentence
    return dale_chall_score
end
