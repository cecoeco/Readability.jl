module Readability

export reading_time, speaking_time
export characters, sentences, syllables,
       words, complex_words, polysyllabic_words, difficult_words
export ARI
export ColemanLiau
export DaleChall
export FleschReadingEase
export FleschKincaidGradeLevel
export GunningFog
export SMOG
export Spache

# Dale-Chall and Spache
function readwordlist(path::String)::Vector{String}
    file::IOStream = Base.open(path, "r")
    words::Vector{String} = Base.readlines(file)
    Base.close(file)
    return words
end

include("ari.jl") # Automatic Readability Index
include("coleman-liau.jl")
include("counts.jl")
include("dale-chall.jl")
include("flesch-kincaid.jl")
include("gunning_fog.jl")
include("smog.jl") # Simple Measure of Gobbledygook
include("spache.jl")
include("time.jl")

end
