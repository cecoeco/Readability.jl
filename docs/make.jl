using Documenter, DocumenterCitations, Readability

const ASSETS::String = joinpath(dirname(@__FILE__), "src/assets")

Documenter.makedocs(
    modules=[Readability],
    format=Documenter.HTML(assets=["assets/bib.css"]),
    sitename="Readability.jl",
    authors="Ceco Elijah Maples and Contributors",
    pages=["Home" => "index.md", "API" => "api.md"],
    plugins=[
        DocumenterCitations.CitationBibliography(
            joinpath(ASSETS, "references.bib"),
            style=:numeric
        )
    ]
)

Documenter.deploydocs(repo="github.com/cecoeco/Readability.jl.git")
