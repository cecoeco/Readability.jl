"""
    characters(text::String)

Returns the number of characters in `text`.
"""
function characters(text::String)::Int
    return Base.length(text)
end

"""
    characters_per_word(text::String)

Returns the number of characters per word or the average word length in `text`.
"""
function characters_per_word(text::String)::Number
    return characters(text) / words(text)
end

"""
    sentences(text::String)

Returns the number of sentences in `text`.
"""
function sentences(text::String)::Int
    return Base.length(Base.split(text, ['.', '!', '?']))
end

"""
    sentences_per_paragraph(text::String)

Returns the number of sentences per paragraph or the average paragraph length in `text`.
"""
function sentences_per_paragraph(text::String)::Number
    return sentences(text) / paragraphs(text)
end

"""
    syllables(text::String)

Returns the number of syllables in `text`.
"""
function syllables(text::String)::Int
    vowels::String = "aeiou"
    count::Int = 0
    in_vowel_sequence::Bool = false
    text::String = Base.lowercase(text)
    for char in text
        if char in vowels
            if !in_vowel_sequence
                count += 1
                in_vowel_sequence = true
            end
        else
            in_vowel_sequence = false
        end
    end

    return count
end

"""
    syllables_per_word(text::String)

Returns the number of syllables per word or the average word length in `text`.
"""
function syllables_per_word(text::String)::Number
    return syllables(text) / words(text)
end

"""
    words(text::String)

Returns the number of words in `text`.
"""
function words(text::String)::Int
    return Base.length(Base.split(text))
end

"""
    words_per_sentence(text::String)

Returns the number of words per sentence or the sentence length in `text`.
"""
function words_per_sentence(text::String)::Number
    return words(text) / sentences(text)
end

"""
    lines(text::String)

Returns the number of lines `text`.
"""
function lines(text::String)::Int
    return Base.length(Base.split(text, "\n"))
end

"""
    paragraphs(text::String)

Returns the number of paragraphs in `text`.
"""
function paragraphs(text::String)::Int
    return Base.length(Base.split(text, "\n\n"))
end
