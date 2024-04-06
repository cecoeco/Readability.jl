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

# DaleChall and Spache
function readwordlist(path::String)::Vector{String}
    file::IOStream = Base.open(path, "r")
    words::Vector{String} = Base.readlines(file)
    Base.close(file)
    return words
end

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
