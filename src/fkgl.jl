"""
    FleschKincaidGradeLevel(text::String)

Returns the Flesch-Kincaid grade level of `text`.
"""
function FleschKincaidGradeLevel(text::String)::Float64
    return 0.39 * words_per_sentence(text) + 11.8 * syllables_per_word(text) - 15.59
end
