// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">

        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Readability.jl</title>
          <meta name="author" content="Ceco Elijah Maples" />
          <meta name="description" content="Readability.jl, a Julia package for analyzing text readability" />
          <meta name="keywords" content="ARI, 
        Automated Readability Index, 
        average reading time, 
        average speaking time, 
        characters, 
        Coleman-Liau, 
        complexity, 
        Dale-Chall, 
        difficulty, 
        Flesch Reading Ease, 
        Flesch-Kincaid, 
        Gobblydegook, 
        grade level, 
        Gunning Fog,
        Julia, 
        Julia package,
        Readability.jl, 
        reading, 
        sentences, 
        SMOG, 
        Solid Framework, 
        SolidStart,
        Solid.js, 
        speaking, 
        Spache, 
        syllables, 
        text, 
        words" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1a1a1e" />
          <link rel="icon" type="image/png" href="../public/favicon.png" />
          {assets}
        </head>

        <body id="app">
          {children}
          {scripts}
        </body>

      </html>
    )}
  />
));
