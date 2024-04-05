function FleschReadingEase(text::String)
    total_words::Int = words(text)
    total_sentences::Int = sentences(text)
    total_syllables::Int = syllables(text)

    words_per_sentence::Float64 = total_words / total_sentences
    syllables_per_word::Float64 = total_syllables / total_words

    reading_ease_score::Float64 = 206.835 - 1.015 * words_per_sentence - 84.6 * syllables_per_word
    return reading_ease_score
end

function FleschKincaidGradeLevel(text::String)
    total_words::Int = words(text)
    total_sentences::Int = sentences(text)
    total_syllables::Int = syllables(text)

    words_per_sentence::Float64 = total_words / total_sentences
    syllables_per_word::Float64 = total_syllables / total_words

    grade_level::Float64 = 0.39 * words_per_sentence + 11.8 * syllables_per_word - 15.59
    return grade_level
end
