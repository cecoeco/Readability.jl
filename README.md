# Readability

Julia package that analyzes the difficulty of texts using different indexes like Gunning-Fog, SMOG, and Flesch-Kincaid.

## Features
- count number of words in string
- count number of syllables in string
- count number of sentences in string 
- count number of characters in string
- count number of complex words in string
- count number of polysyllbic words in string
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
metric_09 = Readability.ARI(txt)
metric_10 = Readability.ColemanLiau(txt)
metric_11 = Readability.DaleChall(txt)
metric_12 = Readability.FleschReadingEase(txt)
metric_13 = Readability.FleschKincaidGradeLevel(txt)
metric_14 = Readability.GunningFog(txt)
metric_15 = Readability.SMOG(txt)
metric_16 = Readability.Spache(txt)

println("reading time: $metric_01 seconds")
println("speaking time: $metric_02 seconds")
println("characters: $metric_03")
println("sentences: $metric_04")
println("syllables: $metric_05")
println("words: $metric_06")
println("complex words: $metric_07")
println("polysyllabic words: $metric_08")
println("ARI: $metric_09")
println("Coleman-Liau: $metric_10")
println("Dale-Chall: $metric_11")
println("Flesch Reading Ease Score: $metric_12")
println("Flesch-Kincaid Grade Level: $metric_13")
println("Gunning Fog: $metric_14")
println("SMOG: $metric_15")
println("Spache: $metric_16")
```
