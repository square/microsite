# BUILDING

## Getting started

Running `bundle install` should finish successfully.

If it fails with something like:

```
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```

you may need to install the xcode tools via `xcode-select --install`.

The Gemfile should specify the Ruby version necessary to run Jekyll. You may want to install `rvm` or another Ruby manager to install the right Ruby version.

## Running the site locally

After `bundle install`, the site should successfully run with `bundle exec jekyll serve`.

This will run the Jekyll server at `http://127.0.0.1:4000/` by default. Open that URL in Chrome and apply the permalink on the page in the `_pages` directory to navigate to the right subdirectory.

For example, the `mobile-interview-project.md` file specifies `permalink: /mobile-interview-project/` in the Jekyll front matter, so navigating to `http://127.0.0.1:4000/mobile-interview-project/` will launch its Jekyll generated page.