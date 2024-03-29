/** Sets the document's theme color based on the current styles. */
export function refereshThemeColor(): void;

/**
 * Automatically set the theme color depending on light/dark mode and the
 * current tint color. Note that this registers an event listener for color
 * scheme changes. To remove the listener, run the `unsubscribe` function
 * returned by `useThemeColor`.
 */
export function useThemeColor(): {
  unsubscribe: () => void;
};
