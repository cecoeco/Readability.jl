function count_polysyllables(text::String)
    words::Vector{String} = split(text)
    polysyllable_count::Int = 0
    for word in words
        syllable_count = count_syllables(word)
        if syllable_count >= 3
            polysyllable_count += 1
        end
    end
    return polysyllable_count
end

function smog(text::String)
    sentences::Vector{String} = split(text, ['.', '!', '?'])
    sentence_count::Int = length(sentences)
    polysyllable_count::Int = count_polysyllables(text)

    smog_index = 1.0430 * sqrt((polysyllable_count * 30) / sentence_count) + 3.1291
    return smog_index
end