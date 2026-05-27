# Change log
All notable changes to this project will be documented in this file.

# [19.0.0] - 27.05.2026

# Added
- Добавлен `rimraf` как dev-зависимость для кросс-платформенной очистки папки `dist`

# Changed
- Версия пакета поднята до `19.0.0` (совместимость с Angular 19)
- Обновлена peer-зависимость `@ng-bootstrap/ng-bootstrap` с `^13.1.1` до `^17.0.0`
- Webpack: режим сборки переключён на `production`, добавлен `output.clean: true`, отключены performance hints
- Полная миграция SCSS: все `@import` заменены на `@use`/`@forward`/`meta.load-css()` (Dart Sass 3.0 удалит `@import`)
  - `theme/_variables.scss`: добавлены `@forward "color-palette"` и `@forward "../base/functions"` для доступа потребителей к палитре и функциям
  - `theme/_mixins.scss`: добавлен `@forward "./functions"` для экспорта `map-collect()`
  - Внутри CSS-блоков `.theme-*`: `@import "../utilities/utilities.themes"` заменён на `@include meta.load-css(...)` во всех 4 файлах тем
  - `_loader.utilities.scss`: `$inuit-offsets: true` перенесён в `@use "utilities.widths" as * with ($inuit-offsets: true)`
- Исправлена устаревшая функция `color.red()`/`color.green()`/`color.blue()` → `color.channel($color, "red", $space: rgb)` в `base/_functions.scss`
- Миксины переименованы для совместимости с Sass module system (имена с `_` недоступны из других модулей):
  - `@mixin _c-btn_grouped` → `@mixin c-btn_grouped` в `button/_mixins.scss` (все вызовы обновлены)
  - `@mixin _c-input` → `@mixin c-input-base` в `input/_mixins.scss` (все вызовы обновлены)

# Removed
- Удалена папка `src/nvd3/` (стили для заброшенной библиотеки NVD3)
- Удалены peer-зависимости: `ng-inline-svg`, `ng2-nvd3`, `nvd3`, `d3` (заброшены)
- Удалены dev-зависимости: `@csstools/postcss-sass`, `autoprefixer`, `extract-loader`, `file-loader`, `postcss-clean`, `postcss-font-magician`, `postcss-loader`, `postcss-scss`, `precss`, `resolve-url-loader`, `style-loader` (не использовались)

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/).
This project adheres to [Semantic Versioning](http://semver.org/).
This project adheres to [GitFlow](http://nvie.com/posts/a-successful-git-branching-model/).
"

# [9.0.17] - 08.06.2023

# Added
- добавлен иконочный шрифт InsparkIcons

# Fixed


# [9.0.18] - 08.06.2023

# Added

# Fixed
- исправлены иконки в InsparkIcons
