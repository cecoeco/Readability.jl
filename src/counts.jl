function characters(text::String)
    count::Int = length(text)
    return count
end

function sentences(text::String)
    count::Int = length(split(text, ['.', '!', '?']))
    return count
end

function syllables(text::String)
    vowels::String = "aeiou"
    count::Int = 0
    in_vowel_sequence::Bool = false
    text::String = lowercase(text)
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

function words(text::String)
    count::Int = length(split(text))
    return count
end

# Gunning Fog
function complex_words(text::String)
    words::Vector{String} = split(text)
    count::Int = 0
    for word in words
        syllable_count::Int = syllables(word)
        if syllable_count >= 3 && !any(x -> occursin(x, word), ['-', "es", "ed", "ing"])
            count += 1
        end
    end
    return count
end

# SMOG
function polysyllabic_words(text::String)
    words::Vector{String} = split(text)
    count::Int = 0
    for word in words
        syllable_count = syllables(word)
        if syllable_count >= 3
            count += 1
        end
    end
    return count
end

# Dale-Chall and Spache
function difficult_words(text::String, word_list::Vector{String})
    lower_text::String = lowercase(text)
    words::Vector{String} = split(lower_text)
    count::Int = 0
    for word in words
        if !(word in word_list)
            count += 1
        end
    end
    return count
end
