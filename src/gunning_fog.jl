"""
    complex_words(text::String)

Returns the number of complex words (words with 3 or more syllables and not ending in "es", "ed", or "ing") in `text`.
"""
function complex_words(text::String)::Int
    words::Vector{String} = Base.split(text)
    count::Int = 0
    for word in words
        syllable_count::Int = syllables(word)
        if syllable_count >= 3 && !Base.any(x -> Base.occursin(x, word), ['-', "es", "ed", "ing"])
            count += 1
        end
    end
    return count
end

function percentage_of_complex_words(text::String)::Number
    return 100 * complex_words(text) / words(text)
end

"""
    gunning_fog(text::String)

Returns the Gunning Fog index of `text`.
"""
function gunning_fog(text::String)::Number
    return 0.4 * (words_per_sentence(text) + percentage_of_complex_words(text))
end
