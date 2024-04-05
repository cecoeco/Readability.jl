function Spache(text::String)
    path::String = Base.joinpath(Base.dirname(Base.@__FILE__), "spache_word_list.txt")
    spache_words::Vector{String} = readwordlist(path)

    total_characters::Int = characters(text)
    total_words::Int = words(text)
    total_difficult_words::Int = difficult_words(text, spache_words)
    total_sentences::Int = sentences(text)

    percentage_of_difficult_words::Float64 = 100 * total_difficult_words / total_words
    characters_per_sentence::Float64 = total_characters / total_sentences

    #spache_score::Float64 = 
    #return spache_score
end
