function ARI(text::String)
    total_characters::Int = characters(text)
    total_words::Int = words(text)
    total_sentences::Int = sentences(text)

    characters_per_word::Float64 = total_characters / total_words
    words_per_sentence::Float64 = total_words / total_sentences

    grade::Float64 = 4.71 * characters_per_word + 0.5 * words_per_sentence - 21.43
    grade = Base.ceil(Int, grade)
    return grade
end
