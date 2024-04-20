"""
    ARI(text::String)

Returns the Automated Readability Index (ARI) of `text`.
"""
function ARI(text::String)
    return Base.ceil(Int, 4.71 * characters_per_word(text) + 0.5 * words_per_sentence(text) - 21.43)
end
