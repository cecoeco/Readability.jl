# DaleChall and Spache
function readwordlist(path::String)::Vector{String}
    file::IOStream = Base.open(path, "r")
    words::Vector{String} = Base.readlines(file)
    Base.close(file)

    return words
end

"""
    difficult_words(text::String, word_list::String)::Int

Returns the number of words that are not in the specified `word_list` (either "dale-chall" or "spache") in `text`.
"""
function difficult_words(text::String, word_list::String)::Int
    lower_text::String = Base.lowercase(text)
    words::Vector{String} = Base.split(lower_text)
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
        Base.error("word_list must be 'dale-chall' or 'spache'")
    end

    return count
end

function percentage_of_difficult_words(text::String, word_list::String)::Float64
    return 100 * difficult_words(text, word_list) / words(text)
end

"""
    dale_chall(text::String)::Number

Returns the Dale-Chall readability score of `text`.
"""
function dale_chall(text::String)::Number
    return 64 - 0.95 * percentage_of_difficult_words(text, "dale-chall") - 0.69 * words_per_sentence(text)
end

"""
    spache(text::String)

Returns the Spache readability score of `text`.
"""
function spache(text::String)::Number
    return 0.121 * words_per_sentence(text) + 0.082 * percentage_of_difficult_words(text, "spache") + 0.659
end
