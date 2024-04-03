function ari(text::String)
    character_count::Int = length(text)
    word_count::Int = length(split(text))
    sentence_count = length(split(text, ['.', '!', '?']))
    grade = 4.71 * (character_count / word_count) + 0.5 * (word_count / sentence_count) - 21.43
    return ceil(Int, grade)
end
