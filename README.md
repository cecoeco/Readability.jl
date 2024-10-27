<div>
<a href="https://github.com/cecoeco/Readability.jl/actions/workflows/CI.yml"><img alt="CI test" src="https://github.com/cecoeco/Readability.jl/actions/workflows/CI.yml/badge.svg"></a>
<a href="https://cecoeco.github.io/Readability.jl/stable/"><img src="https://img.shields.io/badge/docs-stable-blue.svg" alt="Documentation Stable" /></a> 
<a href="https://cecoeco.github.io/Readability.jl/dev/"><img src="https://img.shields.io/badge/docs-dev-blue.svg" alt="Documentation Dev"></a>
<a href="https://juliapkgstats.com/pkg/Readability"><img src="https://img.shields.io/badge/dynamic/json?url=http%3A%2F%2Fjuliapkgstats.com%2Fapi%2Fv1%2Ftotal_downloads%2FReadability&query=total_requests&label=Downloads" alt="Package Statistics"></a>
<a href="https://github.com/JuliaDiff/BlueStyle"><img alt="Style: Blue" src="https://img.shields.io/badge/code%20style-blue-4495d1.svg"></a>

</div>

# Readability.jl

Julia package that analyzes the difficulty of texts using different indexes like Gunning-Fog, SMOG, and Flesch-Kincaid.

## Installation

use this command in the Julia REPL:

```julia
using Pkg; Pkg.add("Readability")
```

## Web App

The `Readability.jl` package can be used without ever having to program via a [web application](https://readability-jl.onrender.com) written in [`React.js`](https://react.dev/) and [`Oxygen.jl`](https://github.com/OxygenFramework/Oxygen.jl)

![Web App GIF](web-application.gif)