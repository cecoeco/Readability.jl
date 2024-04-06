function GunningFog(text::String)
    total_words::Int = words(text)
    total_sentences::Int = sentences(text)
    total_complex_words::Int = complex_words(text)

    words_per_sentence::Float64 = total_words / total_sentences
    percentage_of_complex_words::Float64 = 100 * total_complex_words / total_words

    fog_index::Float64 = 0.4 * (words_per_sentence + percentage_of_complex_words)
    return fog_index
end
