module Readability

export reading_time, 
       speaking_time,
       times
export flesch_reading_ease, 
       flesch_kincaid_grade_level, 
       flesch_kincaid
export gunning_fog
export smog
export ari

include("time.jl")
include("flesch-kincaid.jl")
include("gunning_fog.jl")
include("smog.jl")
include("ari.jl")

end
