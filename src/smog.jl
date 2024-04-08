"""
    SMOG(text::String)

Returns the SMOG index of `text`.
"""
function SMOG(text::String)
    total_sentences::Int = sentences(text)
    total_polysyllablic_words::Int = polysyllabic_words(text)

    smog_index::Float64 = 1.0430 * Base.sqrt(total_polysyllablic_words * (30 / total_sentences)) + 3.1291
    return smog_index
end
