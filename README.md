# marty-todo

A simple todo application built with Marty (React / Flux). This is purely a learning exercise, if that wasn't already obvious.

```bash
# Fetch the dependencies.
npm install

# Start the server.
grunt
```

I originally set up my own gulp/browserify/babel build but I couldn't get source maps working so I eventually used the yeoman generator. The important thing is that I can learn some more about this architecture. Looking back, however, I thing I actually had a perfectly valid gulp build, I just thought sourmaps would apply in the project / file view of Chrome, I now realise it's only through the Ctrl+O search thing. DOH.

## Components

 * TodoList
  * Checkbox (toggle all done)
  * Input (creation)
  * [TodoItem]
    * Checkbox (toggle item done)
  * TodoStatus (with count, filter and clear completed button)
    * RadioSelector (filter)

Will need a store to represent the todos. Would love to use immutable but this is just a quick project to play with the architecture. Maybe I will use it...

Would also like to persist to localStorage, but that's less important. I was considering writing my own little state source to be queried against localStorage, but it turns out there's one built in! So I'll use that.

I can't work out where best to perform a write yet though. Just require the API object and execute the method? Register a listener for the update action and call write?

## Unlicenced

Find the full [unlicense][] in the `UNLICENSE` file, but here's a snippet.

>This is free and unencumbered software released into the public domain.
>
>Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

Do what you want. Learn as much as you can. Unlicense more software.

[unlicense]: http://unlicense.org/
