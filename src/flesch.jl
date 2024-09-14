"""
    flesch_kincaid_grade_level(text::String)

Returns the Flesch-Kincaid grade level of `text`.
"""
function flesch_kincaid_grade_level(text::String)::Float64
    return 0.39 * words_per_sentence(text) + 11.8 * syllables_per_word(text) - 15.59
end

"""
    flesch_reading_ease_score(text::String)

Returns the Flesch Reading Ease Score of `text`.
"""
function flesch_reading_ease_score(text::String)::Float64
    return 206.835 - 1.015 * words_per_sentence(text) - 84.6 * syllables_per_word(text)
end
