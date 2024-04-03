function count_syllables(word::String)
    vowels::String = lowercase("aeiou")
    count::Int = 0
    in_vowel_sequence::Bool = false
    for char in word
        if lowercase(char) in vowels
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

function flesch_reading_ease(text::String)
    words::Vector{String} = split(text)
    sentences::Vector{String} = split(text, ['.', '!', '?'])
    word_count::Int = length(words)
    sentence_count::Int = length(sentences)
    syllable_count::Int = sum(count_syllables(string(word)) for word in words)

    reading_ease_score = 206.835 - 1.015 * (word_count / sentence_count) - 84.6 * (syllable_count / word_count)
    return reading_ease_score
end

function flesch_kincaid_grade_level(text::String)
    words::Vector{String} = split(text)
    sentences::Vector{String} = split(text, ['.', '!', '?'])
    word_count::Int = length(words)
    sentence_count::Int = length(sentences)
    syllable_count::Int = sum(count_syllables(string(word)) for word in words)

    grade_level = 0.39 * (word_count / sentence_count) + 11.8 * (syllable_count / word_count) - 15.59
    return grade_level
end

function flesch_kincaid(text::String)
    reading_ease_score = flesch_reading_ease(text)
    grade_level = flesch_kincaid_grade_level(text)
    character_count = length(text)
    word_count = length(split(text))
    sentence_count = length(split(text, ['.', '!', '?']))
    syllable_count = count_syllables(text)

    metrics::Vector{String} = [
        "Flesch Reading Ease Score: $reading_ease_score",
        "Flesch Kincaid Grade Level: $grade_level",
        "Characters: $character_count",
        "Syllables: $syllable_count",
        "Words: $word_count",
        "Sentences: $sentence_count"
    ]
    return metrics
end
