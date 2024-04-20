module Readability

export reading_time, speaking_time
export characters, characters_per_word
export syllables, syllables_per_word
export words, words_per_sentence
export sentences, sentences_per_paragraph
export lines, paragraphs
export ARI
export ColemanLiau
export DaleChall, Spache, difficult_words
export FleschKincaidGradeLevel, FleschReadingEase
export GunningFog, complex_words
export SMOG, polysyllabic_words

include("counts.jl")
include("time.jl")

include("ari.jl") # Automatic Readability Index
include("coleman-liau.jl")
include("dale-chall.jl")
include("fkgl.jl") # Flesch-Kincaid Grade Level
include("fres.jl") # Flesch Reading Ease Score
include("gunning_fog.jl")
include("smog.jl") # Simple Measure of Gobbledygook
include("spache.jl")

end
