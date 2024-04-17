FROM julia:1.10
COPY app/backend/Project.toml ./
COPY app/backend/Manifest.toml ./
RUN julia --project -e 'using Pkg; Pkg.instantiate()'
COPY src/ ./src/
EXPOSE 5050
ENTRYPOINT [ "julia", "--project", "src/app.jl" ]
