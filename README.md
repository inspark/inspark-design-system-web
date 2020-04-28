# inspark-design-system-web
ДИЗАЙН-СИСТЕМА платформы INSPARK 

## Работа с проектом
- ``npm i``
- внесение правок
- ``npm run build``

## Публикация пакета
- изменить версию в package.json
- ``npm i``
- commit, push
- ``npm run build``
- ``npm run publish``

## Настройка проектов semux и web-widget-container для локальной разработки
### Перед началом работы
  - в приложении semux
    - angular.json
      - "node_modules/@inspark/components-web/src" angular.json заменить на: "<относительный путь к inspark-design-system-web>/src"
      - "node_modules/@inspark/components-web/index.css" заменить на: "<относительный путь к inspark-design-system-web>/dist/components-web/index.css"
    - package.json 
      - для "@inspark/components-web" номер версии пакета заменить на: "<относительный путь к inspark-design-system-web>/dist/components-web"
  - в приложении web-widget-container
    - angular.json
      - "node_modules/@inspark/components-web/index.css" заменить на: "<относительный путь к inspark-design-system-web>/dist/components-web/index.css"
### По окончании работ
  - в приложении semux
    - angular.json
      - "<относительный путь к inspark-design-system-web>/src" angular.json заменить на: "node_modules/@inspark/components-web/src"
      - "<относительный путь к inspark-design-system-web>/dist/components-web/index.css" заменить на: "node_modules/@inspark/components-web/index.css"
    - package.json 
      - для "@inspark/components-web" локальный путь к проекту заменить на последний номер версии, например: "^0.1.11"
  - в приложении web-widget-container
      - angular.json
        - "<относительный путь к inspark-design-system-web>/dist/components-web/index.css" заменить на: "node_modules/@inspark/components-web/index.css"

  - после публикции пакета можно опционально обновить версию пакета в приложениях при необходимости
    - в semux
      - обновить версию components-web в package.json
      - ``npm i``
      - commit, push
    - в widget-container
      - обновить версию components-web в package.json
      - ``npm i``
      - commit, push

## Разработка через npm-link
- https://docs.npmjs.com/cli/link

# Спецификация цветов
https://www.figma.com/file/PAfIMHF2GSmLlFIZiGvRL4/ISS-Colors?node-id=0%3A1
