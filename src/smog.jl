"""
    polysyllabic_words(text::String)::Int

Returns the number of words with 3 or more syllables in `text`.
"""
function polysyllabic_words(text::String)::Int
    words::Vector{String} = Base.split(text)
    count::Int = 0
    for word in words
        syllable_count = syllables(word)
        if syllable_count >= 3
            count += 1
        end
    end
    return count
end

"""
    smog(text::String)::Number

Returns the SMOG Index of `text`.
"""
function smog(text::String)::Number
    return 1.0430 * Base.sqrt(polysyllabic_words(text) * (30 / sentences(text))) + 3.1291
end
