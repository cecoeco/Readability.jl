"""
    characters(text::String)

Returns the number of characters in `text`.
"""
function characters(text::String)
    count::Int = length(text)
    return count
end

"""
    sentences(text::String)

Returns the number of sentences in `text`.
"""
function sentences(text::String)
    count::Int = length(split(text, ['.', '!', '?']))
    return count
end

"""
    syllables(text::String)

Returns the number of syllables in `text`.
"""
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

"""
    words(text::String)

Returns the number of words in `text`.
"""
function words(text::String)
    count::Int = length(split(text))
    return count
end

"""
    lines(text::String)

Returns the number of lines `text`.
"""
function lines(text::String)
    count::Int = length(split(text, "\n"))
    return count
end

"""
    paragraphs(text::String)

Returns the number of paragraphs in `text`.
"""
function paragraphs(text::String)
    count::Int = length(split(text, "\n\n"))
    return count
end

# Gunning Fog
"""
    complex_words(text::String)

Returns the number of complex words (words with 3 or more syllables and not ending in "es", "ed", or "ing") in `text`.
"""
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
"""
    polysyllabic_words(text::String)

Returns the number of words with 3 or more syllables in `text`.
"""
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

# DaleChall and Spache
function readwordlist(path::String)::Vector{String}
    file::IOStream = Base.open(path, "r")
    words::Vector{String} = Base.readlines(file)
    Base.close(file)
    return words
end

"""
    difficult_words(text::String, word_list::String)

Returns the number of words that are not in the specified `word_list` (either "dale-chall" or "spache") in `text`.
"""
function difficult_words(text::String, word_list::String)
    lower_text::String = lowercase(text)
    words::Vector{String} = split(lower_text)
    count::Int = 0

    dale_chall_txt::String = Base.joinpath(Base.dirname(Base.@__FILE__), "dale-chall_word_list.txt")
    dale_chall_words::Vector{String} = readwordlist(dale_chall_txt)

    spache_txt::String = Base.joinpath(Base.dirname(Base.@__FILE__), "spache_word_list.txt")
    spache_words::Vector{String} = readwordlist(spache_txt)

    if word_list == "dale-chall"
        for word in words
            if !(word in dale_chall_words)
                count += 1
            end
        end
    elseif word_list == "spache"
        for word in words
            if !(word in spache_words)
                count += 1
            end
        end
    else
        error("word_list must be 'dale-chall' or 'spache'")
    end

    return count
end
