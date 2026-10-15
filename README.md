# hakamat-tfasim (בונה תבניות)

פרויקט עם שתי תיקיות:

- `Frontend` - אפליקציית Angular 20 (standalone)
- `Backend` - שרת .NET (`TavniyotBuilder.Api`)

README זה מתאר את צד הלקוח (`Frontend`) בלבד.
הוראות הרצה והגדרה של השרת: ראו README של ה-Backend (באחריות מי שכתבה אותו).

> הריפו פרטי. כדי לשכפל אותו צריך להיות מוזמנת כ-Collaborator.

## הורדת הפרויקט

שם הריפו מתחיל במקף, ולכן חובה לתת שם לתיקייה:

```
git clone -b <שם-הענף> https://github.com/DassiErenshtein/-hakamat-tfasim.git hakamat-tfasim
cd hakamat-tfasim
```

ב-Git Bash צריך לכתוב `&` בשם ענף עם לוכסן הפוך: `margalit-\&-chedva`.

## הרצת הלקוח (Frontend)

### דרישות מקדימות

- Node.js ו-npm
- Angular CLI: `npm install -g @angular/cli`
- הקובץ `nmh-core-<גרסה>.tgz` מהצוות (החבילה הפנימית של הלוגין, לא נמצאת ב-npm הציבורי)

### התקנה והרצה

1. שימי את קובץ ה-`nmh-core-*.tgz` בנתיב ש-`Frontend/package.json` מצביע עליו (מתחיל ב-`file:`), או עדכני את הנתיב אצלך מקומית בלי לעשות לו commit.
2. התקנה:

```
cd Frontend
npm install --legacy-peer-deps
```

`--legacy-peer-deps` נדרש כי `nmh-core` מגדירה תלויות peer ישנות.

3. ודאי ש-`Frontend/src/environments/environment.development.ts` מכיל את כתובת השרת המקומי:

```ts
export const environment = {
  url: 'https://localhost:7007/api/'
};
```

4. הרצה:

```
ng serve
```

ופתיחת `http://localhost:4200`. השרת צריך לרוץ במקביל.

## הלוגין

- `NMHCoreModule` ו-`NMHCoreConfigService` רשומים ב-`app.config.ts`.
- `AuthGuard` מהספרייה מוגדר ב-`canActivate` של כל route, ראשון במערך.
- ב-`app.html` התוכן עטוף ב-`@if (authService.Token)`, ו-`<router-outlet>` נמצא מחוץ לתנאי.
- בכל route חדש חובה להוסיף `canActivate: [AuthGuard]`.
- הזרקת שירותים נעשית עם `inject()`.

## מה לא מעלים לגיט

- `node_modules`, `.angular`
- קובצי `.tgz` של החבילות

לפני כל `git add`, להריץ `git status` ולבדוק מה עומד לעלות.

## הערות

- בפרודקשן הכתובת ב-`environment.ts` וקובץ `web.config` מטופלים על ידי מערכת הפריסה.
