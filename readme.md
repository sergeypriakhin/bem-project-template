# bem-project-template
**Шаблон проекта для быстрого старта**


## Старт проекта

### Склонируй репозиторий и перейди в папку проекта
```
git clone https://github.com/sergeypriakhin/bem-project-template.git
```

### Установи модули
```
npm i
```

### Запусти шаблон
```
gulp server
```


## Структура папок и файлов
```
├── app/					   		# Исходники
│   ├── blocks/                		# Блоки
│   │   └── block/             		# Блок
│   │       ├── block.jade     		# Разметка блока
│   │       ├── block.js       		# Скрипт блока
│   │       └── block.scss     		# Стили блока 
|   ├── data/                   	# Данные в формате JSON
│   ├── pages/                 		# Страницы
│   │   └── index.jade         		# Разметка страницы
|   ├── partials              		# Файлы частей шаблона
│   │   ├── layout-default.jade     # layouts
│   │   └── head.jade         		# head страницы
│   ├── public/                		# Статические файлы для копирования в dist
│   ├── scripts/               		# Скрипты
│   │   └── app.js             		# Главный скрипт
│   ├── styles/                		# Стили
│   |   ├── base/              		# базовые стили
|	|	|	├── fonts.scss     		# Подключение шрифтов
|	|	|	├── global.scss     	# Глобальные стили
│   |   │   └── typography.scss 	# Типография
│   |   ├── helpers/           		# Помощники
│   |   │   ├── mixins.scss    		# Примеси
│   |   │   └── variables.scss 		# Переменные
│   |   ├── vendors/           		# Подключенные библиотеки
|	|	|	└── normalize.scss 		# Сброс стилей и фиксы
│   |   └── app.scss           		# Главный стилевой файл
├── dist/                      		# Сборка (автогенерация)
│   ├── assets/                		# Подключаемые ресурсы
│   │   ├── fonts/             		# Шрифты
│   │   ├── images/            		# Изображения
│   │   ├── scripts/           		# Скрипты
│   │   └── styles/            		# Стили
│   └── index.html             		# Страница
├── tasks/                     		# Подключаемые скрипты с задачами для gulpfile.js
│   ├── build.js             		# Задачи по умолчанию
│   ├── copy.js                		# Копирование
│   ├── scripts.js             		# Сборка скриптов
│   ├── server.js              		# Запуск локального сервера
│   ├── styles-sass.js              # Сборка стилей
│   ├── templates.js           		# Сборка страниц из Jade шаблонов
│   └── watch.js               		# Отслеживание изменений и запуск задач
├── .gitignore                 		# Список исключённых файлов из Git
├── gulpfile.js          			# Файл для запуска Gulp.js
├── package.json               		# Список модулей и прочей информации
└── readme.md                  		# Документация шаблона
```
