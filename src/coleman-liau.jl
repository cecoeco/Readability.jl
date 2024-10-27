function characters_per_100_words(text::String)::Number
    return characters(text) / words(text) * 100
end

function sentences_per_100_words(text::String)::Number
    return sentences(text) / words(text) * 100
end

"""
    coleman_liau(text::String)::Number

Returns the Coleman-Liau Index of `text`.

CLI = 0.0588 * L - 0.296 * S - 15.8

L = number of characters per 100 words

S = number of sentences per 100 words

## Argument

- `text::String`: The text to analyze.

## Returns

- `Number`: The Coleman-Liau Index.

"""
function coleman_liau(text::String)::Number
    L::Number = characters_per_100_words(text)
    S::Number = sentences_per_100_words(text)

    return 0.0588 * L - 0.296 * S - 15.8
end
