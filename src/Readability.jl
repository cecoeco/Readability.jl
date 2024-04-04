module Readability

export reading_time, 
       speaking_time,
       times
export ari
export coleman_liau
export dale_chall
export flesch_reading_ease, 
       flesch_kincaid_grade_level, 
       flesch_kincaid
export gunning_fog
export smog
export spache

include("ari.jl")
include("coleman-liau.jl")
include("dale-chall.jl")
include("flesch-kincaid.jl")
include("gunning_fog.jl")
include("smog.jl")
include("spache.jl")
include("time.jl")

end
