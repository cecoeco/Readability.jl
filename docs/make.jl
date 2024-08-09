using Documenter, Readability

Documenter.makedocs(
    modules=[Readability],
    pages=["Home" => "index.md"],
    repo="https://github.com/cecoeco/Readability.jl",
    sitename="Readability.jl",
    authors="Ceco Elijah Maples"
)

Documenter.deploydocs(repo="github.com/cecoeco/Readability.jl.git")
