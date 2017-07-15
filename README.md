# react-native-externs [![Downloads](https://jarkeeper.com/artemyarulin/react-native-externs/downloads.svg)](https://jarkeeper.com/artemyarulin/react-native-externs)

[![Clojars Project](http://clojars.org/react-native-externs/latest-version.svg)](http://clojars.org/react-native-externs)

Google Closure extern files for React Native

## Why?

In short there are still benefits from doing advanced optimization.

One of the advantages of React Native is hot release (= ability to
deploy new version without AppStore review). Here simple ClojureScript
application with Om-Next:

|  Optimisation level    |  Size      | Size (gzip best)      |
|------------------------|----------- |-----------------------|
|  `simple`              | 1.1MB      | 148KB                 |
|  `advanced`            | 169KB      | 43KB                  |

The difference would be bigger for the real app which includes
different libraries, etc. Imagine that you have 100k users and you do
weekly release, calculate the traffic.

Another reason for the advanced optimisation - it's really good
obfuscator. With React Native all your source code is available in the
app bundle and it's dramatically easy to replicate the app. With
advanced optimisations it's much easier to write software from scratch
rather than steal the source and try to go through all the garbage
from Google Closure

## Status

All the components and API of React Native itself should be covered

## Installation

If you are using ClojureScript with Reagent/Om/Om-Next or any other CLJS wrapper around React make sure that you exclude browser React version:

``` clojure
{:dependencies [[react-native-externs "0.0.1-SNAPSHOT"]
                [org.omcljs/om "1.0.0-alpha25" :exclusions [cljsjs/react cljsjs/react-dom]]]
```

Otherwise you will end up with two versions of React: browser and native, which hopefully wouldn't conflict with each other.

If you are not ClojureScript user - then simply grab [React Native externs file](src/react/react.native.ext.js)

# References

- Tired of ClojureScript <> JS interop and looking for React Native wrapper? Have a look on [ktoa](https://github.com/artemyarulin/ktoa)
- Looking for the easy start with ClojureScript and Om-Next? Have a look on [lein template for om-next](https://github.com/artemyarulin/om-next-cross-platform-template)

## TODO

- Put it in NPM and CLJSJS? NPM in case Scala.JS or any other language
  which use Google Closure can use it?

## License

Copyright © 2017 Mike Fikes and Contributors

Copyright © 2015–2016 Artem Yarulin

Distributed under the MIT License
