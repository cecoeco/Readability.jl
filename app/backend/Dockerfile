FROM julia:1.10
COPY Project.toml Manifest.toml ./
RUN julia --project -e 'using Pkg; Pkg.instantiate()'
COPY app.jl ./
ENTRYPOINT [ "julia", "--project", "app.jl" ]