function DaleChall(text::String)
    path = Base.joinpath(Base.dirname(Base.@__FILE__), "dale-chall_word_list.txt")
    dale_chall_words::Vector{String} = readwordlist(path)

    total_characters::Int = characters(text)
    total_words::Int = words(text)
    total_difficult_words::Int = difficult_words(text, dale_chall_words)
    total_sentences::Int = sentences(text)

    percentage_of_difficult_words::Float64 = 100 * total_difficult_words / total_words
    characters_per_sentence::Float64 = total_characters / total_sentences

    #dale_chall_score::Float64 = 
    #return dale_chall_score
end

