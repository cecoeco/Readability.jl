using Documenter
using DocumenterCitations
using Readability

bib_filepath = Base.joinpath(Base.dirname(@__FILE__), "src/assets/references.bib")
bib = DocumenterCitations.CitationBibliography(bib_filepath, style=:authoryear)

Documenter.makedocs(
    modules=[Readability],
    format=Documenter.HTML(
        assets=[
            "src/assets/bib.css"
        ]
    ),
    pages=[
        "Home" => "index.md",
        "References" => "references.md"
    ],
    repo="https://github.com/cecoeco/Readability.jl",
    sitename="Readability.jl",
    authors="Ceco Elijah Maples",
    plugins=[bib]
)

Documenter.deploydocs(repo="github.com/cecoeco/Readability.jl.git")
