export type ThemeName = "light" | "dark"; // add as many theme as you want
export type ThemeTitle = Capitalize<ThemeName>;

export interface ITheme {
  title: ThemeTitle;
  name: ThemeName;
  emoji: React.ReactNode;
}
