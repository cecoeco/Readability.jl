function count_complex_words(text::String)
    words::Vector{String} = split(text)
    complex_count::Int = 0
    for word in words
        syllable_count::Int = count_syllables(word)
        if syllable_count >= 3 && !any(x -> occursin(x, word), ['-', "es", "ed", "ing"])
            complex_count += 1
        end
    end
    return complex_count
end

function gunning_fog(text::String)
    words::Vector{String} = split(text)
    sentences::Vector{String} = split(text, ['.', '!', '?'])
    word_count::Int = length(words)
    sentence_count::Int = length(sentences)
    complex_word_count::Int = count_complex_words(text)

    fog_index = 0.4 * ((word_count / sentence_count) + 100 * (complex_word_count / word_count))
    return fog_index
end
