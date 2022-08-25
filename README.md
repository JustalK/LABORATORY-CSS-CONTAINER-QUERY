# LABORATORY-CSS-CONTAINER-QUERY

## How to use

**CSS container queries is an experimental feature. To enable its support in DevTools, under chrome://flags, set the Enable CSS Container Queries experiment to Enabled.
**

For using the CSS Container query, you need to define a property as a container using the property: **container-type**

```css
.component1 {
  container-type: inline-size;
}
```

Once done, I can use this property to define my query based on the size of this container.

```css
@container (min-width: 300px) {
  .component1_child {
    width: 50%;
    background: blue;
  }
}
```

## Links

- [https://developer.chrome.com/docs/devtools/css/container-queries/](https://developer.chrome.com/docs/devtools/css/container-queries/)
- [https://ishadeed.com/article/say-hello-to-css-container-queries/](https://ishadeed.com/article/say-hello-to-css-container-queries/)
