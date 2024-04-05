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

# DaleChall and Spache
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

#=
txt = "
Pride and Prejudice by Jane Austen
Chapter 1

It is a truth universally acknowledged, that a single man in
possession of a good fortune, must be in want of a wife.

However little known the feelings or views of such a man may be
on his first entering a neighbourhood, this truth is so well
fixed in the minds of the surrounding families, that he is
considered the rightful property of some one or other of their
daughters.

“My dear Mr. Bennet,” said his lady to him one day, “have you
heard that Netherfield Park is let at last?”

Mr. Bennet replied that he had not.

“But it is,” returned she; “for Mrs. Long has just been here, and
she told me all about it.”

Mr. Bennet made no answer.

“Do you not want to know who has taken it?” cried his wife
impatiently.

“_You_ want to tell me, and I have no objection to hearing it.”

This was invitation enough.

“Why, my dear, you must know, Mrs. Long says that Netherfield is
taken by a young man of large fortune from the north of England;
that he came down on Monday in a chaise and four to see the
place, and was so much delighted with it, that he agreed with Mr.
Morris immediately; that he is to take possession before
Michaelmas, and some of his servants are to be in the house by
the end of next week.”

“What is his name?”

“Bingley.”

“Is he married or single?”

“Oh! Single, my dear, to be sure! A single man of large fortune;
four or five thousand a year. What a fine thing for our girls!”

“How so? How can it affect them?”

“My dear Mr. Bennet,” replied his wife, “how can you be so
tiresome! You must know that I am thinking of his marrying one of
them.”

“Is that his design in settling here?”

“Design! Nonsense, how can you talk so! But it is very likely
that he _may_ fall in love with one of them, and therefore you
must visit him as soon as he comes.”

“I see no occasion for that. You and the girls may go, or you may
send them by themselves, which perhaps will be still better, for
as you are as handsome as any of them, Mr. Bingley may like you
the best of the party.”

“My dear, you flatter me. I certainly _have_ had my share of
beauty, but I do not pretend to be anything extraordinary now.
When a woman has five grown-up daughters, she ought to give over
thinking of her own beauty.”

“In such cases, a woman has not often much beauty to think of.”

“But, my dear, you must indeed go and see Mr. Bingley when he
comes into the neighbourhood.”

“It is more than I engage for, I assure you.”

“But consider your daughters. Only think what an establishment it
would be for one of them. Sir William and Lady Lucas are
determined to go, merely on that account, for in general, you
know, they visit no newcomers. Indeed you must go, for it will be
impossible for _us_ to visit him if you do not.”

“You are over-scrupulous, surely. I dare say Mr. Bingley will be
very glad to see you; and I will send a few lines by you to
assure him of my hearty consent to his marrying whichever he
chooses of the girls; though I must throw in a good word for my
little Lizzy.”

“I desire you will do no such thing. Lizzy is not a bit better
than the others; and I am sure she is not half so handsome as
Jane, nor half so good-humoured as Lydia. But you are always
giving _her_ the preference.”

“They have none of them much to recommend them,” replied he;
“they are all silly and ignorant like other girls; but Lizzy has
something more of quickness than her sisters.”

“Mr. Bennet, how can you abuse your own children in such a way?
You take delight in vexing me. You have no compassion for my poor
nerves.”

“You mistake me, my dear. I have a high respect for your nerves.
They are my old friends. I have heard you mention them with
consideration these last twenty years at least.”

“Ah, you do not know what I suffer.”

“But I hope you will get over it, and live to see many young men
of four thousand a year come into the neighbourhood.”

“It will be no use to us, if twenty such should come, since you
will not visit them.”

“Depend upon it, my dear, that when there are twenty, I will
visit them all.”

Mr. Bennet was so odd a mixture of quick parts, sarcastic humour,
reserve, and caprice, that the experience of three-and-twenty
years had been insufficient to make his wife understand his
character. _Her_ mind was less difficult to develop. She was a
woman of mean understanding, little information, and uncertain
temper. When she was discontented, she fancied herself nervous.
The business of her life was to get her daughters married; its
solace was visiting and news.

"

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
=#