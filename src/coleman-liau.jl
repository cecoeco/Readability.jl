"""
    ColemanLiau(text::String)

Returns the Coleman-Liau index of `text`.
"""
function ColemanLiau(text::String)
    total_characters::Int = characters(text)
    total_words::Int = words(text)
    total_sentences::Int = sentences(text)

    characters_per_100_words::Float64 = total_characters / total_words * 100
    sentences_per_100_words::Float64 = total_sentences / total_words * 100

    CLI::Float64 = 0.0588 * characters_per_100_words - 0.296 * sentences_per_100_words - 15.8
    return CLI
end
