"""
    FleschReadingEase(text::String)

Returns the Flesch Reading Ease Score of `text`.
"""
function FleschReadingEase(text::String)
    total_words::Int = words(text)
    total_sentences::Int = sentences(text)
    total_syllables::Int = syllables(text)

    words_per_sentence::Float64 = total_words / total_sentences
    syllables_per_word::Float64 = total_syllables / total_words

    reading_ease_score::Float64 = 206.835 - 1.015 * words_per_sentence - 84.6 * syllables_per_word
    return reading_ease_score
end
