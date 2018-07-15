Using the @ngrx/schematics we can generate the sidebar actions:

```bash
ng g a state/sidebar --group=true
```

To break the command down:

* g = generate
* a = action
* state/sidebar = place the sidebar actions file within the state directory
* g = group the actions together in an **actions* directory.