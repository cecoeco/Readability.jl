# Readability

Julia package that analyzes the difficulty of texts using different indexes like Gunning-Fog, SMOG, and Flesch-Kincaid.

## Features
- count number of words in string
- count number of syllables in string
- count number of sentences in string 
- count number of characters in string
- count number of complex words in string
- count number of polysyllabic words in string
- determine average reading time
- determine average speaking time
- determine difficulty and reading grade level of text
- web-based interface that requires zero knowledge of Julia or programming.

```julia
using Pkg
Pkg.add("Readability")

using Readability, HTTP

url = "https://en.wikipedia.org/wiki/Enzyme"

response = HTTP.get(url)
txt = String(response.body)

metric_01 = Readability.reading_time(txt, wpm=250)
metric_02 = Readability.speaking_time(txt, wpm=200)
metric_03 = Readability.characters(txt)
metric_04 = Readability.sentences(txt)
metric_05 = Readability.syllables(txt)
metric_06 = Readability.words(txt)
metric_07 = Readability.complex_words(txt)
metric_08 = Readability.polysyllabic_words(txt)
metric_09 = Readability.difficult_words(txt, "dale-chall")
metric_10 = Readability.difficult_words(txt, "spache")
metric_11 = Readability.ari(txt)
```