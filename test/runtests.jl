module ReadabilityTests

using Test, Readability

const TEXTS = [
    "This is a simple sentence.",
    "Another example, with punctuation! Also, numbers like 123.",
    "Short sentence. Even shorter.",
    "Long sentence with lots of words, complex structures, and punctuation marks!",
    "This one is a bit tricky; let's see how the metrics work.",
    "Will it work with... ellipses? Or maybe, parentheses (like these)?",
    "Hypothetical paragraph designed to test reading times and word complexities.",
    "Final sample text to verify sentence and paragraph counts. Good luck!",
]

@testset "Readability.ari" begin
    for text in TEXTS
        score = Readability.ari(text)
        @test score >= 0
    end
end

@testset "Readability.characters" begin
    for text in TEXTS
        char_count = Readability.characters(text)
        @test char_count == length(text)
    end
end

@testset "Readability.characters_per_word" begin
    for text in TEXTS
        cpw = Readability.characters_per_word(text)
        @test cpw > 0
    end
end

@testset "Readability.coleman_liau" begin
    for text in TEXTS
        score = Readability.coleman_liau(text)
        @test score >= 0
    end
end

@testset "Readability.complex_words" begin
    for text in TEXTS
        complex_count = Readability.complex_words(text)
        @test complex_count >= 0
    end
end

@testset "Readability.dale_chall" begin
    for text in TEXTS
        score = Readability.dale_chall(text)
        @test score >= 0
    end
end

@testset "Readability.difficult_words" begin
    for text in TEXTS
        diff_count = Readability.difficult_words(text, "dale-chall")
        @test diff_count >= 0
    end

    for text in TEXTS
        diff_count = Readability.difficult_words(text, "spache")
        @test diff_count >= 0
    end
end

@testset "Readability.flesch_kincaid_grade_level" begin
    for text in TEXTS
        score = Readability.flesch_kincaid_grade_level(text)
        @test score >= 0
    end
end

@testset "Readability.flesch_reading_ease_score" begin
    for text in TEXTS
        score = Readability.flesch_reading_ease_score(text)
        @test 0 <= score <= 121.22
    end
end

@testset "Readability.gunning_fog" begin
    for text in TEXTS
        score = Readability.gunning_fog(text)
        @test score >= 0
    end
end

@testset "Readability.lines" begin
    for text in TEXTS
        line_count = Readability.lines(text)
        @test line_count >= 1
    end
end

@testset "Readability.paragraphs" begin
    for text in TEXTS
        para_count = Readability.paragraphs(text)
        @test para_count >= 1
    end
end

@testset "Readability.polysyllabic_words" begin
    for text in TEXTS
        poly_count = Readability.polysyllabic_words(text)
        @test poly_count >= 0
    end
end

@testset "Readability.reading_time" begin
    for text in TEXTS
        time = Readability.reading_time(text)
        @test time > 0
    end
end

@testset "Readability.sentences" begin
    for text in TEXTS
        sentence_count = Readability.sentences(text)
        @test sentence_count >= 1
    end
end

@testset "Readability.sentences_per_paragraph" begin
    for text in TEXTS
        spp = Readability.sentences_per_paragraph(text)
        @test spp > 0
    end
end

@testset "Readability.smog" begin
    for text in TEXTS
        score = Readability.smog(text)
        @test score >= 0
    end
end

@testset "Readability.spache" begin
    for text in TEXTS
        score = Readability.spache(text)
        @test score >= 0
    end
end

@testset "Readability.speaking_time" begin
    for text in TEXTS
        time = Readability.speaking_time(text)
        @test time > 0
    end
end

@testset "Readability.syllables" begin
    for text in TEXTS
        syllable_count = Readability.syllables(text)
        @test syllable_count >= 0
    end
end

@testset "Readability.syllables_per_word" begin
    for text in TEXTS
        spw = Readability.syllables_per_word(text)
        @test spw > 0
    end
end

@testset "Readability.words" begin
    for text in TEXTS
        word_count = Readability.words(text)
        @test word_count > 0
    end
end

@testset "Readability.words_per_sentence" begin
    for text in TEXTS
        wps = Readability.words_per_sentence(text)
        @test wps > 0
    end
end

end
