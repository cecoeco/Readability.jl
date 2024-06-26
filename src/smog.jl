"""
    SMOG(text::String)

Returns the SMOG index of `text`.
"""
function SMOG(text::String)
    return 1.0430 * Base.sqrt(polysyllabic_words(text) * (30 / sentences(text))) + 3.1291
end
