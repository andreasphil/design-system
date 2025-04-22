// Theme color management ---------------------------------

function lookupThemeColor() {
  const dummyEl = document.createElement("div");
  dummyEl.style.setProperty("background-color", "var(--c-surface-bg)");
  dummyEl.dataset["hidden"] = true;

  document.body.append(dummyEl);
  const style = getComputedStyle(dummyEl);
  const bgColor = style.getPropertyValue("background-color");
  dummyEl.remove();

  return bgColor;
}

export function refreshThemeColor() {
  const themeColor = lookupThemeColor();
  let tag = document.querySelector("meta[name=theme-color]");
  const shouldAppend = !Boolean(tag);

  if (shouldAppend) {
    tag = document.createElement("meta");
    tag.setAttribute("name", "theme-color");
    document.querySelector("head")?.append(tag);
  }

  tag.setAttribute("content", themeColor);
}

export function useThemeColor() {
  function handleColorSchemeChange() {
    refreshThemeColor();
  }

  function unsubscribe() {
    colorScheme.removeEventListener("change", handleColorSchemeChange);
  }

  // Update when color scheme changes
  const colorScheme = window.matchMedia("(prefers-color-scheme: light)");
  colorScheme.addEventListener("change", handleColorSchemeChange);

  // Update when additional styles are loaded
  document.querySelectorAll("link[rel=stylesheet]").forEach((stylesheet) => {
    stylesheet.addEventListener("load", () => {
      refreshThemeColor();
    });
  });

  refreshThemeColor();

  return { unsubscribe };
}
