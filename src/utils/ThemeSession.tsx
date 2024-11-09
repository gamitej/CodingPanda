export class ThemeManager {
  /**
   * Toggles the theme mode and stores the selection in session storage.
   * Also updates the gutter color based on the selected mode.
   * @param isLightMode - Whether the theme should be light mode.
   */
  static toggleThemeModeSession(isLightMode: boolean): void {
    const newTheme = isLightMode ? "light" : "dark";
    sessionStorage.setItem("themeMode", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");

    ThemeManager.updateGutterColor(isLightMode);
  }

  /**
   * Retrieves the stored theme mode from session storage.
   * If no mode is stored, sets default to light mode and updates the gutter color.
   * @returns boolean - true for light mode, false for dark mode.
   */
  static getStoredThemeMode(): boolean {
    const theme = sessionStorage.getItem("themeMode");
    if (theme) {
      ThemeManager.toggleThemeModeSession(theme === "light");
      return theme === "light";
    }
    ThemeManager.toggleThemeModeSession(true);
    return true;
  }

  /**
   * Applies the stored theme mode on page load.
   * Observes and updates the gutter color based on the current theme mode.
   */
  static applyStoredTheme(): void {
    const storedTheme = ThemeManager.getStoredThemeMode();
    document.documentElement.classList.toggle("dark", !storedTheme);

    ThemeManager.observeGutter(storedTheme);
  }

  /**
   * Updates the color of the gutter based on the current theme mode.
   * @param isLightMode - Whether the theme is in light mode.
   */
  static updateGutterColor(isLightMode: boolean): void {
    const gutter = document.querySelector(".gutter") as HTMLElement | null;
    if (gutter) {
      gutter.style.backgroundColor = isLightMode ? "#f1f0f0" : "#1E293B";
    }
  }

  /**
   * Observes for the presence of a gutter element in the DOM.
   * Updates the gutter color once it is available, then stops observing.
   * @param isLightMode - Whether the theme is in light mode.
   */
  static observeGutter(isLightMode: boolean): void {
    const gutter = document.querySelector(".gutter") as HTMLElement | null;

    if (gutter) {
      ThemeManager.updateGutterColor(isLightMode);
    } else {
      // If gutter is not available, observe changes to add color when it's rendered
      const observer = new MutationObserver(() => {
        const gutter = document.querySelector(".gutter") as HTMLElement | null;
        if (gutter) {
          ThemeManager.updateGutterColor(isLightMode);
          observer.disconnect(); // Stop observing once the gutter is found and updated
        }
      });

      // Start observing the document for added nodes
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }
}
