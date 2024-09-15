"""
    ari(text::String)

Returns the Automated Readability Index (ARI) of `text`.

## Argument

- `text::String`: The text to analyze.

## Returns

- `Int`: The ARI score.

## Reference

- [ARI](https://en.wikipedia.org/wiki/Automated_readability_index)
"""
function ari(text::String)::Int
    return Base.ceil(
        Int, 4.71 * characters_per_word(text) + 0.5 * words_per_sentence(text) - 21.43
    )
end
