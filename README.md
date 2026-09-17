# J.A.D.E — Platform

Веб-платформа J.A.D.E (внутрішня кодова назва — **neolith**). Репозиторій на
ранній стадії: наразі налаштовано каркас застосунку, дизайн-систему на базі
shadcn/ui з фірмовими токенами та стартовий брендовий екран. Функціональні
модулі поки не реалізовані.

## Технологічний стек

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (компоненти на Radix UI) з кастомними CSS-змінними
- **next-themes** — перемикання темної та світлої теми
- **lucide-react** — іконки

## Дизайн і бренд

Джерело правди для візуалу — Figma-файл **J.A.D.E project**:
`https://www.figma.com/design/VZUErSo0XedORzPWi4HRKR/J.A.D.E-project`
(`fileKey` = `VZUErSo0XedORzPWi4HRKR`). Наразі у файлі є лише обкладинка з
логотипом і словом «PLATFORM».

Фірмові токени зібрані з обкладинки та винесені в один блок на початку
[`src/app/globals.css`](src/app/globals.css). Семантичні токени shadcn (primary,
background тощо) посилаються на них, тому для ре-брендингу достатньо змінити цей
блок.

| Токен          | Значення  | Призначення                                  |
| -------------- | --------- | -------------------------------------------- |
| `--brand-blue` | `#0E4BE0` | Акцент / `primary`, колір логотипа           |
| `--brand-navy` | `#1B242E` | Тло темної теми                              |
| `--brand-navy-2` | `#212C38` | Картки, поповери, сайдбар у темній темі     |
| `--brand-navy-3` | `#2A3644` | Secondary / muted / accent у темній темі    |

Тема за замовчуванням — темна (відповідає обкладинці), зі підтримкою системної
та ручним перемиканням через кнопку у правому верхньому куті.

Логотип живе у двох формах: як React-компонент
[`src/components/logo.tsx`](src/components/logo.tsx) (використовує `currentColor`)
та як статичний файл [`public/logo.svg`](public/logo.svg).

> **Шрифт.** У макеті використано **Fixel Display**. Файли шрифта ще не
> підключені, тому тимчасово застосовано Geist. Замінити на `next/font/local`
> після додавання ліцензованих файлів (див. `TODO` у
> [`src/app/layout.tsx`](src/app/layout.tsx)).

## Структура

```
src/
  app/
    layout.tsx      # кореневий layout, ThemeProvider, шрифти, метадані
    page.tsx        # брендовий стартовий екран
    globals.css     # Tailwind + бренд-токени + токени тем
  components/
    logo.tsx        # логотип J.A.D.E
    theme-provider.tsx
    theme-toggle.tsx
    ui/             # компоненти shadcn/ui
  lib/
    utils.ts        # cn() та інші утиліти
```

## Розробка

```bash
npm run dev     # дев-сервер на http://localhost:3000
npm run build   # продакшн-збірка
npm run start   # запуск продакшн-збірки
npm run lint    # ESLint
```

Додати компонент shadcn:

```bash
npx shadcn@latest add <component>
```

## Наступні кроки

- Дочекатися екранів у Figma та імплементувати їх поверх наявних токенів.
- Підключити шрифт Fixel Display.
- Визначити структуру навігації та перші функціональні модулі платформи.
