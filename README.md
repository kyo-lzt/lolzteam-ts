# lolzteam-ts

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![CI](https://github.com/kyo-lzt/lolzteam-ts/actions/workflows/ci.yml/badge.svg)](https://github.com/kyo-lzt/lolzteam-ts/actions)

TypeScript SDK для [Lolzteam](https://lolz.live) Forum и Market API. **266 эндпоинтов** (151 Forum + 115 Market), автоматически сгенерированные из OpenAPI спецификаций.

---

## Содержание / Table of Contents

- [Быстрый старт / Quick Start](#быстрый-старт--quick-start)
- [Опции клиента / Client Options](#опции-клиента--client-options)
- [Прокси / Proxy](#прокси--proxy)
- [Авто-retry / Auto-retry](#авто-retry--auto-retry)
- [Обработка ошибок / Error Handling](#обработка-ошибок--error-handling)
- [Rate Limits](#rate-limits)
- [Forum API](#forum-api)
  - [OAuth](#oauth)
  - [Ассеты / Assets](#ассеты--assets)
  - [Категории / Categories](#категории--categories)
  - [Форумы / Forums](#форумы--forums)
  - [Ссылки / Links](#ссылки--links)
  - [Страницы / Pages](#страницы--pages)
  - [Навигация / Navigation](#навигация--navigation)
  - [Темы / Threads](#темы--threads)
  - [Посты / Posts](#посты--posts)
  - [Пользователи / Users](#пользователи--users)
  - [Посты профиля / Profile Posts](#посты-профиля--profile-posts)
  - [Личные сообщения / Conversations](#личные-сообщения--conversations)
  - [Уведомления / Notifications](#уведомления--notifications)
  - [Теги / Tags](#теги--tags)
  - [Поиск / Search](#поиск--search)
  - [Batch](#batch)
  - [Чатбокс / Chatbox](#чатбокс--chatbox)
  - [Формы / Forms](#формы--forms)
- [Market API](#market-api)
  - [Категории / Category](#категории--category)
  - [Список / List](#список--list)
  - [Управление / Managing](#управление--managing)
  - [Профиль / Profile](#профиль--profile)
  - [Корзина / Cart](#корзина--cart)
  - [Покупка / Purchasing](#покупка--purchasing)
  - [Кастомные скидки / Custom Discounts](#кастомные-скидки--custom-discounts)
  - [Публикация / Publishing](#публикация--publishing)
  - [Платежи / Payments](#платежи--payments)
  - [Автоплатежи / Auto Payments](#автоплатежи--auto-payments)
  - [Прокси / Proxy (Market)](#прокси--proxy-market)
  - [IMAP](#imap)
  - [Batch (Market)](#batch-market)
- [Генерация кода / Code Generation](#генерация-кода--code-generation)
- [Сборка и тесты / Build & Test](#сборка-и-тесты--build--test)
- [Структура проекта / Project Structure](#структура-проекта--project-structure)
- [Лицензия / License](#лицензия--license)

---

## Быстрый старт / Quick Start

```bash
git clone https://github.com/kyo-lzt/lolzteam-ts.git
cd lolzteam-ts
bun install
bun run build
```

```typescript
import { ForumClient, MarketClient } from "lolzteam-api";

// Быстрый старт — достаточно передать токен
const forum = new ForumClient("your_token");
const market = new MarketClient("your_token");

// Forum: получить список категорий
const categories = await forum.categories.list();

// Forum: получить список тем
const threads = await forum.threads.list({ forumId: 876 });

// Market: получить все аккаунты
const items = await market.category.all();

// Market: получить Steam-аккаунты
const steam = await market.category.steam();
```

---

## Опции клиента / Client Options

Все поля кроме `token` опциональны.

```typescript
// Быстрый вариант — только токен
const forum = new ForumClient("your_token");

// Полная конфигурация
const client = new ForumClient({
  token: "your_token",
  baseUrl: "https://prod-api.lolz.live",
  proxy: { url: "http://user:pass@127.0.0.1:8080" },
  retry: {
    maxRetries: 5,
    baseDelay: 1000,
    maxDelay: 30000,
  },
  rateLimit: {
    requestsPerMinute: 200,
  },
  searchRateLimit: {
    requestsPerMinute: 30,
  },
  timeout: 15000,
  onRetry: (info) => {
    console.log(`Retry #${info.attempt} for ${info.method} ${info.path} in ${info.delay}ms`);
  },
});
```

| Field | Type | Default | Description |
|---|---|---|---|
| `token` | `string` | *required* | API access token |
| `baseUrl` | `string` | per-client | Forum: `https://prod-api.lolz.live`, Market: `https://prod-api.lzt.market` |
| `proxy` | `{ url: string }` | `undefined` | Прокси (требует `undici`) |
| `retry` | `RetryConfig` | `undefined` | Настройки retry (`undefined` = отключено) |
| `rateLimit` | `{ requestsPerMinute: number }` | `300` / `120` | Лимит запросов в минуту |
| `searchRateLimit` | `{ requestsPerMinute: number }` | `20` (Market) | Лимит для search-эндпоинтов |
| `timeout` | `number` | `30000` | Таймаут запроса (мс) |
| `onRetry` | `(info: RetryInfo) => void` | `undefined` | Колбэк при каждом retry |

---

## Прокси / Proxy

Требуется пакет `undici`. Поддерживаются HTTP, HTTPS и SOCKS5.

```typescript
// HTTP-прокси
const client = new ForumClient({
  token: "your_token",
  proxy: { url: "http://127.0.0.1:8080" },
});

// Прокси с авторизацией
const client2 = new ForumClient({
  token: "your_token",
  proxy: { url: "http://user:pass@proxy.example.com:3128" },
});

// SOCKS5-прокси
const client3 = new ForumClient({
  token: "your_token",
  proxy: { url: "socks5://127.0.0.1:1080" },
});
```

Прокси недоступен в браузерных окружениях. Попытка использования вызовет `ConfigError`.

---

## Авто-retry / Auto-retry

Неудачные запросы автоматически повторяются при транзиентных ошибках. Задержка рассчитывается по формуле экспоненциального отступа с jitter. Заголовок `Retry-After` на 429-ответах учитывается.

| Status | Retried | Behavior |
|--------|---------|----------|
| 429 | Yes | Использует `Retry-After` заголовок |
| 502, 503, 504 | Yes | Exponential backoff с jitter |
| Network errors | Yes | Timeout и connection errors |
| 401, 403 | No | Выбрасывается немедленно |
| 404 | No | Выбрасывается немедленно |
| Other | No | Выбрасывается немедленно |

Формула задержки: `min(baseDelay * 2^attempt + random(0, baseDelay), maxDelay)`

```typescript
// Отключить retry (по умолчанию отключён)
const client = new ForumClient({ token: "..." });

// Включить retry с колбэком
const client2 = new ForumClient({
  token: "...",
  retry: { maxRetries: 3, baseDelay: 1000, maxDelay: 30000 },
  onRetry: (info) => console.log(`Retry #${info.attempt}`),
});
```

---

## Обработка ошибок / Error Handling

Все ошибки наследуют `LolzteamError`. HTTP-ошибки содержат статус-код, тело ответа и заголовки.

```typescript
import { ForumClient, RateLimitError, AuthError, NotFoundError, NetworkError } from "lolzteam-api";

try {
  const user = await forum.users.get(1);
} catch (error) {
  if (error instanceof AuthError) {
    console.error("Невалидный или истекший токен");
  } else if (error instanceof NotFoundError) {
    console.error("Пользователь не найден");
  } else if (error instanceof RateLimitError) {
    console.error("Rate limit, повтор через:", error.retryAfter);
  } else if (error instanceof NetworkError) {
    console.error("Сетевая ошибка:", error.cause);
  }
}
```

Иерархия ошибок:

```
LolzteamError
├── HttpError
│   ├── RateLimitError       (429)
│   ├── AuthError            (401, 403)
│   ├── NotFoundError        (404)
│   └── ServerError          (500, 502, 503, 504)
├── NetworkError
├── ConfigError
├── RetryExhaustedError
└── ValidationError
```

---

## Rate Limits

Встроенный rate limiter использует алгоритм token bucket. Когда токены заканчиваются, запросы ставятся в очередь -- ни один запрос не отбрасывается.

| Client | Default limit |
|--------|---------------|
| Forum  | 300 req/min   |
| Market | 120 req/min   |
| Market (search) | 20 req/min |

```typescript
const client = new MarketClient({
  token: "...",
  rateLimit: { requestsPerMinute: 200 },
  searchRateLimit: { requestsPerMinute: 30 },
});
```

---

## Forum API

Группы API: `oAuth`, `assets`, `categories`, `forums`, `links`, `pages`, `navigation`, `threads`, `posts`, `users`, `profilePosts`, `conversations`, `notifications`, `tags`, `search`, `batch`, `chatbox`, `forms`.

### OAuth

```typescript
// Получить OAuth-токен (POST /oauth/token)
const token = await forum.oAuth.token({ grantType: "authorization_code", clientId: "...", clientSecret: "..." });
```

### Ассеты / Assets

```typescript
// Получить CSS-ассеты (GET /assets/css)
const css = await forum.assets.css();
```

### Категории / Categories

```typescript
// Получить список категорий (GET /categories)
const categories = await forum.categories.list();

// Получить категорию по ID (GET /categories/:id)
const category = await forum.categories.get(1);
```

### Форумы / Forums

```typescript
// Получить список форумов (GET /forums)
const forums = await forum.forums.list();

// Получить сгруппированные форумы (GET /forums/grouped)
const grouped = await forum.forums.grouped();

// Получить форум по ID (GET /forums/:id)
const f = await forum.forums.get(876);

// Получить подписчиков форума (GET /forums/:id/followers)
const followers = await forum.forums.followers(876);

// Подписаться на форум (POST /forums/:id/followers)
const follow = await forum.forums.follow(876);

// Отписаться от форума (DELETE /forums/:id/followers)
const unfollow = await forum.forums.unfollow(876);

// Получить форумы, на которые подписан (GET /forums/followed)
const followed = await forum.forums.followed();

// Получить настройки ленты (GET /forums/feed-options)
const feedOptions = await forum.forums.getFeedOptions();

// Редактировать настройки ленты (PUT /forums/feed-options)
const editFeed = await forum.forums.editFeedOptions();
```

### Ссылки / Links

```typescript
// Получить список ссылок (GET /links)
const links = await forum.links.list();

// Получить ссылку по ID (GET /links/:id)
const link = await forum.links.get(1);
```

### Страницы / Pages

```typescript
// Получить список страниц (GET /pages)
const pages = await forum.pages.list();

// Получить страницу по ID (GET /pages/:id)
const page = await forum.pages.get(1);
```

### Навигация / Navigation

```typescript
// Получить элементы навигации (GET /navigation)
const nav = await forum.navigation.list();
```

### Темы / Threads

```typescript
// Получить список тем (GET /threads)
const threads = await forum.threads.list({ forumId: 876 });

// Создать тему (POST /threads)
const thread = await forum.threads.create({ forumId: 876, postBody: "Текст", title: "Заголовок" });

// Создать конкурс (POST /threads/contests)
const contest = await forum.threads.createContest({ forumId: 876, postBody: "Текст", title: "Конкурс" });

// Забрать тему (POST /threads/claim)
const claim = await forum.threads.claim();

// Получить тему по ID (GET /threads/:id)
const t = await forum.threads.get(123);

// Редактировать тему (PUT /threads/:id)
const edit = await forum.threads.edit(123, { title: "Новый заголовок" });

// Удалить тему (DELETE /threads/:id)
const del = await forum.threads.delete(123);

// Переместить тему (POST /threads/:id/move)
const move = await forum.threads.move(123, { forumId: 877 });

// Поднять тему (POST /threads/:id/bump)
const bump = await forum.threads.bump(123);

// Скрыть тему (POST /threads/:id/hide)
const hide = await forum.threads.hide(123);

// Добавить в избранное (POST /threads/:id/star)
const star = await forum.threads.star(123);

// Убрать из избранного (DELETE /threads/:id/star)
const unstar = await forum.threads.unstar(123);

// Получить подписчиков темы (GET /threads/:id/followers)
const tFollowers = await forum.threads.followers(123);

// Подписаться на тему (POST /threads/:id/followers)
const tFollow = await forum.threads.follow(123);

// Отписаться от темы (DELETE /threads/:id/followers)
const tUnfollow = await forum.threads.unfollow(123);

// Получить темы, на которые подписан (GET /threads/followed)
const tFollowed = await forum.threads.followed();

// Навигация темы (GET /threads/:id/navigation)
const tNav = await forum.threads.navigation(123);

// Получить опрос (GET /threads/:id/poll)
const poll = await forum.threads.pollGet(123);

// Проголосовать в опросе (POST /threads/:id/poll/votes)
const vote = await forum.threads.pollVote(123, { responseIds: [1] });

// Непрочитанные темы (GET /threads/unread)
const unread = await forum.threads.unread();

// Недавние темы (GET /threads/recent)
const recent = await forum.threads.recent();

// Завершить тему (POST /threads/:id/finish)
const finish = await forum.threads.finish(123);
```

### Посты / Posts

```typescript
// Получить список постов (GET /posts)
const posts = await forum.posts.list({ threadId: 123 });

// Создать пост (POST /posts)
const post = await forum.posts.create({ threadId: 123, postBody: "Текст поста" });

// Получить пост по ID (GET /posts/:id)
const p = await forum.posts.get(456);

// Редактировать пост (PUT /posts/:id)
const editPost = await forum.posts.edit(456, { postBody: "Новый текст" });

// Удалить пост (DELETE /posts/:id)
const delPost = await forum.posts.delete(456);

// Получить лайки поста (GET /posts/:id/likes)
const likes = await forum.posts.likes(456);

// Поставить лайк (POST /posts/:id/likes)
const like = await forum.posts.like(456);

// Убрать лайк (DELETE /posts/:id/likes)
const unlike = await forum.posts.unlike(456);

// Получить причины жалобы (GET /posts/:id/report-reasons)
const reasons = await forum.posts.reportReasons(456);

// Пожаловаться на пост (POST /posts/:id/report)
const report = await forum.posts.report(456);

// Получить комментарии к посту (GET /posts/comments)
const comments = await forum.posts.commentsGet({ postId: 456 });

// Создать комментарий (POST /posts/comments)
const comment = await forum.posts.commentsCreate({ postId: 456, commentBody: "Комментарий" });

// Редактировать комментарий (PUT /posts/comments)
const editComment = await forum.posts.commentsEdit({ commentId: 789, commentBody: "Новый текст" });

// Удалить комментарий (DELETE /posts/comments)
const delComment = await forum.posts.commentsDelete({ commentId: 789 });

// Пожаловаться на комментарий (POST /posts/comments/report)
const reportComment = await forum.posts.commentsReport({ commentId: 789 });
```

### Пользователи / Users

```typescript
// Получить список пользователей (GET /users)
const users = await forum.users.list();

// Получить поля профиля (GET /users/fields)
const fields = await forum.users.fields();

// Найти пользователя (GET /users/find)
const found = await forum.users.find({ username: "test" });

// Получить пользователя по ID (GET /users/:id)
const user = await forum.users.get(1);

// Редактировать пользователя (PUT /users/:id)
const editUser = await forum.users.edit(1);

// Получить жалобы пользователя (GET /users/:id/claims)
const claims = await forum.users.claims(1);

// Загрузить аватар (POST /users/:id/avatar)
const avatar = await forum.users.avatarUpload(1, { avatar: file });

// Удалить аватар (DELETE /users/:id/avatar)
const delAvatar = await forum.users.avatarDelete(1);

// Обрезать аватар (POST /users/:id/avatar-crop)
const cropAvatar = await forum.users.avatarCrop(1, { cropX: 0, cropY: 0 });

// Загрузить фон (POST /users/:id/background)
const bg = await forum.users.backgroundUpload(1, { background: file });

// Удалить фон (DELETE /users/:id/background)
const delBg = await forum.users.backgroundDelete(1);

// Обрезать фон (POST /users/:id/background-crop)
const cropBg = await forum.users.backgroundCrop(1, { cropX: 0, cropY: 0 });

// Получить подписчиков (GET /users/:id/followers)
const uFollowers = await forum.users.followers(1);

// Подписаться (POST /users/:id/followers)
const uFollow = await forum.users.follow(1);

// Отписаться (DELETE /users/:id/followers)
const uUnfollow = await forum.users.unfollow(1);

// Получить подписки (GET /users/:id/followings)
const followings = await forum.users.followings(1);

// Получить лайки пользователя (GET /users/:id/likes)
const uLikes = await forum.users.likes(1);

// Получить список игнорируемых (GET /users/ignored)
const ignored = await forum.users.ignored();

// Игнорировать пользователя (POST /users/:id/ignore)
const ignore = await forum.users.ignore(1);

// Изменить настройки игнорирования (PUT /users/:id/ignore)
const ignoreEdit = await forum.users.ignoreEdit(1);

// Перестать игнорировать (DELETE /users/:id/ignore)
const unignore = await forum.users.unignore(1);

// Получить контент пользователя (GET /users/:id/contents)
const contents = await forum.users.contents(1);

// Получить трофеи (GET /users/:id/trophies)
const trophies = await forum.users.trophies(1);

// Получить типы секретного ответа (GET /users/secret-answer-types)
const saTypes = await forum.users.secretAnswerTypes();

// Сбросить секретный ответ (POST /users/sa-reset)
const saReset = await forum.users.saReset();

// Отменить сброс секретного ответа (POST /users/sa-cancel-reset)
const saCancelReset = await forum.users.saCancelReset();
```

### Посты профиля / Profile Posts

```typescript
// Получить список постов профиля (GET /profile-posts)
const profilePosts = await forum.profilePosts.list(1);

// Получить пост профиля (GET /profile-posts/:id)
const pp = await forum.profilePosts.get(100);

// Редактировать пост профиля (PUT /profile-posts/:id)
const editPP = await forum.profilePosts.edit(100, { postBody: "Новый текст" });

// Удалить пост профиля (DELETE /profile-posts/:id)
const delPP = await forum.profilePosts.delete(100);

// Получить причины жалобы (GET /profile-posts/:id/report-reasons)
const ppReasons = await forum.profilePosts.reportReasons(100);

// Пожаловаться (POST /profile-posts/:id/report)
const ppReport = await forum.profilePosts.report(100);

// Создать пост профиля (POST /profile-posts)
const createPP = await forum.profilePosts.create({ postBody: "Текст" });

// Закрепить пост профиля (POST /profile-posts/:id/stick)
const stickPP = await forum.profilePosts.stick(100);

// Открепить пост профиля (POST /profile-posts/:id/unstick)
const unstickPP = await forum.profilePosts.unstick(100);

// Получить лайки поста профиля (GET /profile-posts/:id/likes)
const ppLikes = await forum.profilePosts.likes(100);

// Поставить лайк (POST /profile-posts/:id/likes)
const ppLike = await forum.profilePosts.like(100);

// Убрать лайк (DELETE /profile-posts/:id/likes)
const ppUnlike = await forum.profilePosts.unlike(100);

// Получить список комментариев (GET /profile-posts/:id/comments)
const ppComments = await forum.profilePosts.commentsList(100);

// Создать комментарий (POST /profile-posts/:id/comments)
const ppComment = await forum.profilePosts.commentsCreate(100, { commentBody: "Текст" });

// Редактировать комментарий (PUT /profile-posts/comments/:id)
const ppEditComment = await forum.profilePosts.commentsEdit(100, { commentBody: "Новый" });

// Удалить комментарий (DELETE /profile-posts/comments/:id)
const ppDelComment = await forum.profilePosts.commentsDelete(100);

// Получить комментарий (GET /profile-posts/:id/comments/:id)
const ppGetComment = await forum.profilePosts.commentsGet(100, 200);

// Пожаловаться на комментарий (POST /profile-posts/comments/:id/report)
const ppReportComment = await forum.profilePosts.commentsReport(200);
```

### Личные сообщения / Conversations

```typescript
// Получить список диалогов (GET /conversations)
const convs = await forum.conversations.list();

// Создать диалог (POST /conversations)
const conv = await forum.conversations.create({ title: "Тема" });

// Обновить диалог (PUT /conversations)
const updateConv = await forum.conversations.update({ conversationId: 1, title: "Новая тема" });

// Удалить диалог (DELETE /conversations)
const delConv = await forum.conversations.delete({ conversationId: 1 });

// Начать диалог (POST /conversations/start)
const startConv = await forum.conversations.start({ recipientId: 1, title: "Привет" });

// Сохранить диалог (POST /conversations/save)
const saveConv = await forum.conversations.save({ conversationId: 1 });

// Получить диалог по ID (GET /conversations/:id)
const getConv = await forum.conversations.get(1);

// Получить сообщения диалога (GET /conversations/:id/messages)
const msgs = await forum.conversations.messagesList(1);

// Отправить сообщение (POST /conversations/:id/messages)
const msg = await forum.conversations.messagesCreate(1, { messageBody: "Текст" });

// Поиск по диалогам (POST /conversations/search)
const searchConv = await forum.conversations.search({ query: "текст" });

// Получить сообщение по ID (GET /conversations/messages/:id)
const getMsg = await forum.conversations.messagesGet(100);

// Редактировать сообщение (PUT /conversations/:id/messages/:id)
const editMsg = await forum.conversations.messagesEdit(1, 100, { messageBody: "Новый" });

// Удалить сообщение (DELETE /conversations/:id/messages/:id)
const delMsg = await forum.conversations.messagesDelete(1, 100);

// Пригласить в диалог (POST /conversations/:id/invite)
const invite = await forum.conversations.invite(1, { recipientId: 2 });

// Исключить из диалога (POST /conversations/:id/kick)
const kick = await forum.conversations.kick(1, { userId: 2 });

// Прочитать диалог (POST /conversations/:id/read)
const read = await forum.conversations.read(1);

// Прочитать все диалоги (POST /conversations/read-all)
const readAll = await forum.conversations.readAll();

// Закрепить сообщение (POST /conversations/:id/messages/:id/stick)
const stickMsg = await forum.conversations.messagesStick(1, 100);

// Открепить сообщение (POST /conversations/:id/messages/:id/unstick)
const unstickMsg = await forum.conversations.messagesUnstick(1, 100);

// Добавить в избранное (POST /conversations/:id/star)
const starConv = await forum.conversations.star(1);

// Убрать из избранного (DELETE /conversations/:id/star)
const unstarConv = await forum.conversations.unstar(1);

// Включить уведомления (POST /conversations/:id/alerts-enable)
const alertsOn = await forum.conversations.alertsEnable(1);

// Отключить уведомления (POST /conversations/:id/alerts-disable)
const alertsOff = await forum.conversations.alertsDisable(1);
```

### Уведомления / Notifications

```typescript
// Получить список уведомлений (GET /notifications)
const notifs = await forum.notifications.list();

// Получить уведомление по ID (GET /notifications/:id)
const notif = await forum.notifications.get(1);

// Отметить уведомления прочитанными (POST /notifications/read)
const readNotif = await forum.notifications.read();
```

### Теги / Tags

```typescript
// Получить популярные теги (GET /tags/popular)
const popular = await forum.tags.popular();

// Получить список тегов (GET /tags)
const tags = await forum.tags.list();

// Получить тег по ID (GET /tags/:id)
const tag = await forum.tags.get(1);

// Найти тег (GET /tags/find)
const findTag = await forum.tags.find({ tag: "test" });
```

### Поиск / Search

```typescript
// Поиск по всему (POST /search)
const all = await forum.search.all({ query: "test" });

// Поиск по темам (POST /search/threads)
const sThreads = await forum.search.threads({ query: "test" });

// Поиск по постам (POST /search/posts)
const sPosts = await forum.search.posts({ query: "test" });

// Поиск по пользователям (POST /search/users)
const sUsers = await forum.search.users({ query: "test" });

// Поиск по постам профиля (POST /search/profile-posts)
const sPP = await forum.search.profilePosts({ query: "test" });

// Поиск по тегу (POST /search/tagged)
const sTagged = await forum.search.tagged({ tag: "test" });

// Получить результаты поиска (GET /search/results/:id)
const results = await forum.search.results("search_id_123");
```

### Batch

```typescript
// Выполнить batch-запросы (POST /batch)
const batch = await forum.batch.execute({ jobs: [{ method: "GET", uri: "/threads" }] });
```

### Чатбокс / Chatbox

```typescript
// Получить индекс чатбокса (GET /chatbox)
const chatIndex = await forum.chatbox.index();

// Получить сообщения чатбокса (GET /chatbox/messages)
const chatMsgs = await forum.chatbox.getMessages({ roomId: 1 });

// Отправить сообщение в чатбокс (POST /chatbox/messages)
const chatPost = await forum.chatbox.postMessage({ messageBody: "Привет" });

// Редактировать сообщение чатбокса (PUT /chatbox/messages)
const chatEdit = await forum.chatbox.editMessage({ messageId: 1, messageBody: "Новый текст" });

// Удалить сообщение чатбокса (DELETE /chatbox/messages)
const chatDel = await forum.chatbox.deleteMessage({ messageId: 1 });

// Получить онлайн-пользователей (GET /chatbox/online)
const chatOnline = await forum.chatbox.online({ roomId: 1 });

// Получить причины жалобы (GET /chatbox/report-reasons)
const chatReasons = await forum.chatbox.reportReasons({ roomId: 1 });

// Пожаловаться на сообщение (POST /chatbox/report)
const chatReport = await forum.chatbox.report({ messageId: 1 });

// Получить таблицу лидеров (GET /chatbox/leaderboard)
const chatLeader = await forum.chatbox.getLeaderboard({ roomId: 1 });

// Получить список игнорируемых (GET /chatbox/ignore)
const chatIgnore = await forum.chatbox.getIgnore();

// Добавить в игнор (POST /chatbox/ignore)
const chatAddIgnore = await forum.chatbox.postIgnore({ userId: 1 });

// Удалить из игнора (DELETE /chatbox/ignore)
const chatDelIgnore = await forum.chatbox.deleteIgnore({ userId: 1 });
```

### Формы / Forms

```typescript
// Получить список форм (GET /forms)
const forms = await forum.forms.list();

// Создать форму (POST /forms)
const form = await forum.forms.create({ title: "Форма" });
```

---

## Market API

Группы API: `category`, `list`, `managing`, `profile`, `cart`, `purchasing`, `customDiscounts`, `publishing`, `payments`, `autoPayments`, `proxy`, `imap`, `batch`.

### Категории / Category

```typescript
// Все аккаунты (GET /category)
const all = await market.category.all();

// Список категорий (GET /category)
const catList = await market.category.list();

// Параметры категории (GET /:categoryName/params)
const catParams = await market.category.params("steam");

// Игры категории (GET /:categoryName/games)
const catGames = await market.category.games("steam");

// Steam-аккаунты (GET /steam)
const steam = await market.category.steam();

// Fortnite-аккаунты (GET /fortnite)
const fortnite = await market.category.fortnite();

// Mihoyo-аккаунты (GET /mihoyo)
const mihoyo = await market.category.mihoyo();

// Riot-аккаунты (GET /riot)
const riot = await market.category.riot();

// Telegram-аккаунты (GET /telegram)
const telegram = await market.category.telegram();

// Supercell-аккаунты (GET /supercell)
const supercell = await market.category.supercell();

// EA-аккаунты (GET /ea)
const ea = await market.category.ea();

// World of Tanks аккаунты (GET /world-of-tanks)
const wot = await market.category.wot();

// WoT Blitz аккаунты (GET /wot-blitz)
const wotBlitz = await market.category.wotBlitz();

// Подарочные карты (GET /gifts)
const gifts = await market.category.gifts();

// Epic Games аккаунты (GET /epicgames)
const epic = await market.category.epicGames();

// Escape from Tarkov аккаунты (GET /escape-from-tarkov)
const eft = await market.category.escapeFromTarkov();

// Social Club аккаунты (GET /socialclub)
const socialClub = await market.category.socialClub();

// Uplay аккаунты (GET /uplay)
const uplay = await market.category.uplay();

// Discord аккаунты (GET /discord)
const discord = await market.category.discord();

// TikTok аккаунты (GET /tiktok)
const tikTok = await market.category.tikTok();

// Instagram аккаунты (GET /instagram)
const instagram = await market.category.instagram();

// Battle.net аккаунты (GET /battlenet)
const battleNet = await market.category.battleNet();

// ChatGPT аккаунты (GET /chatgpt)
const chatGPT = await market.category.chatGPT();

// VPN-аккаунты (GET /vpn)
const vpn = await market.category.vpn();

// Roblox аккаунты (GET /roblox)
const roblox = await market.category.roblox();

// Warface аккаунты (GET /warface)
const warface = await market.category.warface();

// Minecraft аккаунты (GET /minecraft)
const minecraft = await market.category.minecraft();

// Hytale аккаунты (GET /hytale)
const hytale = await market.category.hytale();
```

### Список / List

```typescript
// Получить аккаунты пользователя (GET /user/items)
const user = await market.list.user();

// Получить заказы (GET /user/orders)
const orders = await market.list.orders();

// Получить статусы аккаунтов (GET /user/item-states)
const states = await market.list.states();

// Скачать аккаунты (GET /user/:type/download)
const download = await market.list.download("items");

// Получить избранное (GET /user/favorites)
const favorites = await market.list.favorites();

// Получить просмотренные (GET /user/viewed)
const viewed = await market.list.viewed();
```

### Управление / Managing

```typescript
// Получить аккаунт по ID (GET /items/:id)
const item = await market.managing.get(123);

// Удалить аккаунт (DELETE /items/:id)
const del = await market.managing.delete(123);

// Создать жалобу (POST /claims)
const claim = await market.managing.createClaim();

// Массовое получение (POST /items/bulk-get)
const bulk = await market.managing.bulkGet({ itemIds: [1, 2, 3] });

// Стоимость инвентаря Steam (GET /items/:id/steam-inventory-value)
const invValue = await market.managing.steamInventoryValue(123);

// Стоимость Steam-аккаунта (GET /steam-value)
const steamVal = await market.managing.steamValue({ link: "https://..." });

// Превью Steam-аккаунта (GET /items/:id/steam-preview)
const preview = await market.managing.steamPreview(123);

// Редактировать аккаунт (PUT /items/:id)
const edit = await market.managing.edit(123);

// Получить AI-цену (GET /items/:id/ai-price)
const aiPrice = await market.managing.aIPrice(123);

// Получить авто-цену покупки (GET /items/:id/auto-buy-price)
const autoBuyPrice = await market.managing.autoBuyPrice(123);

// Добавить заметку (POST /items/:id/note)
const note = await market.managing.note(123, { note: "Текст" });

// Обновить стоимость Steam (POST /items/:id/steam-update-value)
const updateVal = await market.managing.steamUpdateValue(123);

// Поднять аккаунт (POST /items/:id/bump)
const bump = await market.managing.bump(123);

// Включить авто-поднятие (POST /items/:id/auto-bump)
const autoBump = await market.managing.autoBump(123, { interval: 3600 });

// Отключить авто-поднятие (DELETE /items/:id/auto-bump)
const autoBumpOff = await market.managing.autoBumpDisable(123);

// Открыть аккаунт (POST /items/:id/open)
const open = await market.managing.open(123);

// Закрыть аккаунт (POST /items/:id/close)
const close = await market.managing.close(123);

// Получить изображение (GET /items/:id/image)
const image = await market.managing.image(123);

// Получить email-код (GET /items/:id/email-code)
const emailCode = await market.managing.emailCode(123);

// Получить письма (GET /items/letters2)
const letters = await market.managing.getLetters2();

// Получить mafile Steam (GET /items/:id/steam-mafile)
const mafile = await market.managing.steamGetMafile(123);

// Добавить mafile Steam (POST /items/:id/steam-mafile)
const addMafile = await market.managing.steamAddMafile(123);

// Удалить mafile Steam (DELETE /items/:id/steam-mafile)
const removeMafile = await market.managing.steamRemoveMafile(123);

// Получить код mafile Steam (GET /items/:id/steam-mafile-code)
const mafileCode = await market.managing.steamMafileCode(123);

// Управление Steam SDA (POST /items/:id/steam-sda)
const sda = await market.managing.steamSDA(123);

// Получить Telegram-код (GET /items/:id/telegram-code)
const tgCode = await market.managing.telegramCode(123);

// Сбросить авторизацию Telegram (POST /items/:id/telegram-reset-auth)
const tgReset = await market.managing.telegramResetAuth(123);

// Отказаться от гарантии (POST /items/:id/refuse-guarantee)
const refuseG = await market.managing.refuseGuarantee(123);

// Отклонить запись видео (POST /items/:id/decline-video-recording)
const declineVideo = await market.managing.declineVideoRecording(123);

// Проверить гарантию (GET /items/:id/check-guarantee)
const checkG = await market.managing.checkGuarantee(123);

// Сменить пароль (POST /items/:id/change-password)
const changePwd = await market.managing.changePassword(123);

// Временный пароль email (GET /items/:id/temp-email-password)
const tempPwd = await market.managing.tempEmailPassword(123);

// Добавить приватный тег (POST /items/:id/tag)
const tag = await market.managing.tag(123, { tagId: 1 });

// Удалить приватный тег (DELETE /items/:id/tag)
const untag = await market.managing.untag(123, { tagId: 1 });

// Добавить публичный тег (POST /items/:id/public-tag)
const pubTag = await market.managing.publicTag(123, { tagId: 1 });

// Удалить публичный тег (DELETE /items/:id/public-tag)
const pubUntag = await market.managing.publicUntag(123, { tagId: 1 });

// Добавить в избранное (POST /items/:id/favorite)
const fav = await market.managing.favorite(123);

// Убрать из избранного (DELETE /items/:id/favorite)
const unfav = await market.managing.unfavorite(123);

// Закрепить аккаунт (POST /items/:id/stick)
const stick = await market.managing.stick(123);

// Открепить аккаунт (DELETE /items/:id/stick)
const unstick = await market.managing.unstick(123);

// Передать аккаунт (POST /items/:id/transfer)
const transfer = await market.managing.transfer(123, { userId: 456 });
```

### Профиль / Profile

```typescript
// Получить жалобы профиля (GET /profile/claims)
const claims = await market.profile.claims();

// Получить профиль (GET /profile)
const profile = await market.profile.get();

// Редактировать профиль (PUT /profile)
const editProfile = await market.profile.edit();
```

### Корзина / Cart

```typescript
// Получить корзину (GET /cart)
const cart = await market.cart.get();

// Добавить в корзину (POST /cart)
const addToCart = await market.cart.add({ itemId: 123 });

// Удалить из корзины (DELETE /cart)
const delFromCart = await market.cart.delete();
```

### Покупка / Purchasing

```typescript
// Быстрая покупка (POST /items/:id/fast-buy)
const fastBuy = await market.purchasing.fastBuy(123);

// Проверить аккаунт перед покупкой (GET /items/:id/check)
const check = await market.purchasing.check(123);

// Подтвердить покупку (POST /items/:id/confirm)
const confirm = await market.purchasing.confirm(123);

// Запросить скидку (POST /items/:id/discount-request)
const discountReq = await market.purchasing.discountRequest(123);

// Отменить запрос скидки (DELETE /items/:id/discount-request)
const discountCancel = await market.purchasing.discountCancel(123);
```

### Кастомные скидки / Custom Discounts

```typescript
// Получить кастомные скидки (GET /custom-discounts)
const discounts = await market.customDiscounts.get();

// Создать скидку (POST /custom-discounts)
const createDiscount = await market.customDiscounts.create();

// Редактировать скидку (PUT /custom-discounts)
const editDiscount = await market.customDiscounts.edit();

// Удалить скидку (DELETE /custom-discounts)
const delDiscount = await market.customDiscounts.delete();
```

### Публикация / Publishing

```typescript
// Быстрая продажа (POST /items/fast-sell)
const fastSell = await market.publishing.fastSell();

// Добавить аккаунт (POST /items/add)
const addItem = await market.publishing.add();

// Проверить аккаунт (POST /items/:id/check)
const checkPub = await market.publishing.check(123);

// Внешний аккаунт (POST /items/:id/external)
const external = await market.publishing.external(123);
```

### Платежи / Payments

```typescript
// Получить инвойс (GET /payments/invoice)
const invoice = await market.payments.invoiceGet();

// Создать инвойс (POST /payments/invoice)
const createInvoice = await market.payments.invoiceCreate();

// Список инвойсов (GET /payments/invoice/list)
const invoiceList = await market.payments.invoiceList();

// Получить курсы валют (GET /payments/currency)
const currency = await market.payments.currency();

// Получить список балансов (GET /payments/balance)
const balances = await market.payments.balanceList();

// Обмен валюты (POST /payments/balance/exchange)
const exchange = await market.payments.balanceExchange();

// Перевод средств (POST /payments/transfer)
const payTransfer = await market.payments.transfer();

// Получить комиссию (GET /payments/fee)
const fee = await market.payments.fee();

// Отменить платёж (POST /payments/cancel)
const cancelPay = await market.payments.cancel();

// История платежей (GET /payments/history)
const history = await market.payments.history();

// Получить сервисы выплат (GET /payments/payout-services)
const payoutServices = await market.payments.payoutServices();

// Создать выплату (POST /payments/payout)
const payout = await market.payments.payout();
```

### Автоплатежи / Auto Payments

```typescript
// Список автоплатежей (GET /auto-payments)
const autoPayList = await market.autoPayments.list();

// Создать автоплатёж (POST /auto-payments)
const autoPayCreate = await market.autoPayments.create();

// Удалить автоплатёж (DELETE /auto-payments)
const autoPayDelete = await market.autoPayments.delete();
```

### Прокси / Proxy (Market)

```typescript
// Получить прокси (GET /proxy)
const proxyGet = await market.proxy.get();

// Добавить прокси (POST /proxy)
const proxyAdd = await market.proxy.add({ proxyString: "http://127.0.0.1:8080" });

// Удалить прокси (DELETE /proxy)
const proxyDel = await market.proxy.delete();
```

### IMAP

```typescript
// Создать IMAP-подключение (POST /imap)
const imapCreate = await market.imap.create();

// Удалить IMAP-подключение (DELETE /imap)
const imapDelete = await market.imap.delete();
```

### Batch (Market)

```typescript
// Выполнить batch-запросы (POST /batch)
const marketBatch = await market.batch.batch({ jobs: [{ method: "GET", uri: "/category" }] });
```

---

## Генерация кода / Code Generation

Клиенты и типы автоматически генерируются из OpenAPI 3.1.0 спецификаций в `schemas/`:

```bash
bun run codegen
```

| Input | Output |
|-------|--------|
| `schemas/forum.json` | `src/generated/forum/index.ts`, `src/generated/forum/types.ts` |
| `schemas/market.json` | `src/generated/market/index.ts`, `src/generated/market/types.ts` |

Исходный код генератора: `codegen/src/`.

---

## Сборка и тесты / Build & Test

```bash
bun install          # Установить зависимости
bun run codegen      # Сгенерировать клиенты из OpenAPI-спецификаций
bun run build        # Скомпилировать TypeScript в dist/
bun run typecheck    # Проверка типов (tsc --noEmit)
bun run lint         # Линтинг и форматирование (Biome, авто-фикс)
bun run lint:check   # Проверка линтинга без исправлений
bun test             # Запуск тестов
```

---

## Структура проекта / Project Structure

```
schemas/                    OpenAPI 3.1.0 спецификации
codegen/src/                Генератор кода
src/
  index.ts                  Точка входа пакета (ре-экспорты)
  runtime/
    http-client.ts          HTTP-клиент (fetch-based)
    retry.ts                Retry-логика (exponential backoff + jitter)
    rate-limiter.ts         Token bucket rate limiter
    proxy.ts                Прокси-диспатчер (undici)
    auth.ts                 Аутентификация
    errors.ts               Иерархия ошибок
    types.ts                Типы конфигурации
  generated/
    forum/
      index.ts              ForumClient (18 групп API, 151 метод)
      types.ts              Типы запросов/ответов Forum
    market/
      index.ts              MarketClient (13 групп API, 115 методов)
      types.ts              Типы запросов/ответов Market
tests/
dist/                       Скомпилированный выход
```

---

## Лицензия / License

[MIT](LICENSE)
